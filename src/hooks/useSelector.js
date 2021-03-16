import { Fragment, useContext, useEffect, useState } from "react";
import { CurrencyContext } from "../context/CurrencyContext";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 245,
    marginLeft: 0,
    marginBottom: 15,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

const useSelector = (error) => {

  const [state, setState] = useState([]);
  const [selectedCurr, setSelectedCurr] = useState('');
  const [errorSelect, setErrorSelect] = useState(error);
 
  const {currencies} = useContext(CurrencyContext);

  useEffect(() => {
    setErrorSelect(error);
  }, [error])

  const classes = useStyles();

  const handleChange = (e) => {
    const currencyPair = Object.entries(currencies).find(pair => {
      return pair[0] === e.target.value;
    })
    setErrorSelect(false);
    setSelectedCurr(e.target.value);
    currencyPair && setState(currencyPair);
  }

  const currencySelect = () => (
    <Fragment>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="currency-select">Choose a currency</InputLabel>
        <Select
          error={errorSelect}
          labelId="currency-select"
          id="currency-select"
          label="Choose a currency"
          value={selectedCurr}
          onChange={e => handleChange(e)}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>

          {
          currencies && Object.entries(currencies).map((currency, i) => 
            <MenuItem value={currency[0]} key={i} >{currency[0]} --- {(1/currency[1]).toFixed(5)} €</MenuItem>
          )
          }
        </Select>
      </FormControl>
    </Fragment>
  );

  return [state, currencySelect];
}

export default useSelector;
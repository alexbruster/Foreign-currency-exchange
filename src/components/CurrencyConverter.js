import { useContext, useState } from "react";
import useSelector from "../hooks/useSelector";
import { useHistory } from "react-router";

import { SelectedPairContext } from "../context/SelectedPairContext";
import Error from "./Error";

import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import UseStorage from "../hooks/useStorage";

const CurrencyConverter = () => {

  const[euroAmount, setEuroAmount] = useState('');
  const[currencyAmount, setCurrencyAmount] = useState('');
  const[errorCurr, setErrorCurr] = useState(false);
  const[errorAmount, setErrorAmount] = useState(false);
  
  const{selectedPair, setSelectedPair} = useContext(SelectedPairContext);
  const[curr, SelectCurr] = useSelector(errorCurr);

  const history = useHistory();

  const handleChange = (e) => {
    if (curr.length === 0) {
      setErrorCurr(true);
      return;
    }
    converter(e);
  }

  const converter = (e) => {
    const opOrder = curr[0] + (Math.random()*100000).toFixed(0);

    if (e.target.id === 'foreign-currency') {
      e.target.value ? setEuroAmount(e.target.value/curr[1]) 
        : setEuroAmount('');
      setCurrencyAmount(e.target.value);
      setSelectedPair({ 
        order: opOrder,
        date: handleDate(),
        curr: [curr[0], e.target.value],
        euro: e.target.value/curr[1]
      });
    } else {
      e.target.value ? setCurrencyAmount(curr[1] * e.target.value) 
        : setCurrencyAmount('');
      setEuroAmount(e.target.value);
      setSelectedPair({ 
        order: opOrder,
        date: handleDate(),
        curr: [curr[0], curr[1] * e.target.value],
        euro: e.target.value
      });
    }
    setErrorAmount(false);
    setErrorCurr(false);
  }

  const handleDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return `${day}/${month + 1}/${year}`
  }

  const handleClick = () => {
    if(curr.length === 0) {
      setErrorCurr(true);
      return;
    } else if(curr.length > 0 && (euroAmount.length === 0 || euroAmount === 0 
        || currencyAmount.length === 0 || currencyAmount === 0)) {
      setErrorCurr(false);
      setErrorAmount(true);
      return;
    }
    UseStorage.setPair(`${selectedPair.order}`, JSON.stringify(selectedPair))
    setErrorCurr(false);
    setErrorAmount(false);
    history.push({
      pathname: `/detail/${selectedPair.order}`,
      state: {operation: selectedPair}
    });
  }

  return (
    <div className="exchange-container">
      <SelectCurr error={errorCurr} />

      {(errorCurr && curr.length === 0) ? <Error message='You must first choose a currency' /> : null}
      {errorAmount ? <Error message='You must enter the amount in currency or in euros' /> : null}

      <div className="converter-container">
        <div className="converter-foreign">
          <TextField
            error={errorAmount}
            id="foreign-currency"
            label="Foreign Currency"
            variant="outlined"
            type="number" 
            name="currency" 
            value={currencyAmount}
            onChange={e => handleChange(e)}
          >
          </TextField>
        </div>

        <SwapHorizIcon color="primary" fontSize="large" />
        
        <div className="converter-euro">
          <TextField 
            error={errorAmount}
            id="euro-currency" 
            label="Euro" 
            variant="outlined"
            type="number" 
            name="currency" 
            value={euroAmount}
            onChange={e => handleChange(e)}
          >
          </TextField>
        </div>

      </div>
      
      <Button 
        aria-label="currency-exchange" 
        variant="contained"
        color="primary"
        endIcon={<SendIcon></SendIcon>}
        onClick={() => handleClick()}
      >
        send
      </Button>
    </div>

  );
}
 
export default CurrencyConverter;
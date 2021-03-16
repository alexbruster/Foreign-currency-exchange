import { useState } from 'react';
import { Redirect, useHistory } from 'react-router';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'rgb(218, 219, 224)',
    color: theme.palette.common.black,
    fontWeight: 'bold',
    borderBottom: '2px solid rgb(137, 138, 141)'
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    background: 'rgb(226, 231, 243)'
  },
}));

const ApplicationList = () => {

  const [newOps, setNewOps] = useState([]);

  const classes = useStyles();
  const history = useHistory()
  let operations = [];
  let opArray = newOps.length > 0 ? newOps : operations;

  for(let i=0; i<sessionStorage.length; i++) {
    let key = sessionStorage.key(i);
    let operation = JSON.parse(sessionStorage.getItem(key));
    operations.push(operation); 
  }

  const handleClick = () => {
   history.push('/request');
  }

  const handleChange = e => {
    const operation = operations.filter(op => {
      return (op.order === e.target.id)
    });

    if(e.target.value === 'View') {
      history.push({
        pathname: `/detail/${e.target.id}`,
        state: {operation: operation[0]}
      });
    } else if((e.target.value === 'Delete')) {
      handleDelete(e);
    }
  }

  const handleDelete = (e) => {
    const newOperations = operations.filter(op => {
      return (op.order !== e.target.id)
    })
    sessionStorage.removeItem(e.target.id);
    operations = newOperations;
    setNewOps(newOperations);
  }
  
  return (  
    <div className="list-container">
      <Button 
        variant="contained" 
        color="primary"
        onClick={handleClick}
      >Order Foreign Currency</Button>

      {operations.length !== 0 ? 
          (<TableContainer component={Paper}>
            <Table className={classes.table} aria-label="request-log-table">
              <TableHead>
                <TableRow variant="h4">
                  <StyledTableCell align="center" color="secondary">Order</StyledTableCell>
                  <StyledTableCell align="center">Amount</StyledTableCell>
                  <StyledTableCell align="center">Currency</StyledTableCell>
                  <StyledTableCell align="center">Order Date</StyledTableCell>
                  <StyledTableCell align="center">Type</StyledTableCell>
                  <StyledTableCell align="center">Status</StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {opArray.map(operation => {
                  return (
                  <StyledTableRow key={operation.order}>
                    <StyledTableCell id="order" component="th" scope="row" align="center">
                      {operation.order}
                    </StyledTableCell>
                    <StyledTableCell align="center">{(+(operation.curr[1])).toFixed(2)}</StyledTableCell>
                    <StyledTableCell align="center">{operation.curr[0]}</StyledTableCell>
                    <StyledTableCell align="center">{operation.date}</StyledTableCell>
                    <StyledTableCell align="center">Booking - Office</StyledTableCell>
                    <StyledTableCell align="center">In Progress</StyledTableCell>
                    <StyledTableCell align="center">

                      <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="options" >Options</InputLabel>
                        <Select
                          native
                          id={operation.order}
                          labelId={operation.order}
                          onChange={(e) => handleChange(e)}
                        >
                          <option aria-label="None" value="" />
                          <option>View</option>
                          <option>Delete</option>
                        </Select>
                      </FormControl>

                    </StyledTableCell>
                  </StyledTableRow>)
                })}
              </TableBody>
            </Table>
          </TableContainer>)
        : 
        <h3 className="no-operations">There are no registered operations</h3>
      }
    </div>
  );
}
 
export default ApplicationList;
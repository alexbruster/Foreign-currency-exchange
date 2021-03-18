import { useLocation, useHistory } from "react-router";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '65%',
  },
  title: {
    fontSize: 14,
    marginBottom: 20
  },
});

const ExchangeDetail = () => {

  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const operation = location.state.operation;
  const commission = 10;
  
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Operation ID: {operation.order}
        </Typography>
        <Typography variant="body2" component="p">
          Approximate price: {(+operation.euro).toFixed(2)} €
          <br/>
          Total foreign currency: {(+operation.curr[1]).toFixed(2)} {operation.curr[0]}
          <br/>
          Commission: {commission} €
          <br/>
          Total price: {(+(operation.euro) + commission).toFixed(2)} €
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small"
          onClick={() => history.push('/')}
        >
          Go to Home Page
        </Button>
      </CardActions>
    </Card>
  );
}

export default ExchangeDetail;
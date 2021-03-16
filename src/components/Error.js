import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  error: {
    color: '#e53935',
  }
}))

const Error = ({message}) => {
  const classes = useStyles();

  return (  
    <FormLabel component="legend" className={classes.error}>{message}</FormLabel>
  );
}
 
export default Error;
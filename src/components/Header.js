import { useHistory } from 'react-router';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function Header() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography id="logo"
            variant="h6" 
            color="inherit"
            onClick={() => history.push('/')}
          >
            currency eXchange
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
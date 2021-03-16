import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CurrencyProvider from "./context/CurrencyContext";
import SelectedPairProvider from "./context/SelectedPairContext";
import Menu from './components/Menu';
import Header from './components/Header';
import Home from './components/Home';
import ApplicationList from './components/ApplicationList';
import ExchangeDetail from './components/ExchangeDetail';
import CurrencyConverter from "./components/CurrencyConverter";
import Grid from '@material-ui/core/Grid';
import './App.css';

function App() {
  return (
    <CurrencyProvider>
      <SelectedPairProvider>
        <Router>
          <Header />
          <Grid container >
            <Grid item sm={2}>
              <Menu />
            </Grid>

            <Grid item xs={12} sm={10}>
              <h2 className="title">currencies and foreign exchange</h2>
                <Switch>
                  <Route exact path="/"><Home /></Route>
                  <Route path="/list"><ApplicationList /></Route>
                  <Route path="/request"><CurrencyConverter /></Route>
                  <Route path="/detail/:id"><ExchangeDetail /></Route>
                </Switch>
            </Grid>
          </Grid>
        </Router>
      </SelectedPairProvider>
    </CurrencyProvider>
  );
}

export default App;

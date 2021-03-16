import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import EuroIcon from '@material-ui/icons/Euro';

const Home = () => {
  return (  
    <div className="home-container">
      <MonetizationOnOutlinedIcon color="primary" style={{fontSize: 130}} />
      <SwapHorizIcon color="primary" style={{fontSize: 130}} />
      <EuroIcon color="primary" style={{fontSize: 130}} />
      <h4>Choose an option from the menu</h4>
    </div>
  );
}
 
export default Home;
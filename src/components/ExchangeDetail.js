import { useContext } from "react";
import { SelectedPairContext } from "../context/SelectedPairContext";

const ExchangeDetail = () => {

  const {selectedPair} = useContext(SelectedPairContext);
console.log(selectedPair)
  const commission = 10;
  const curr = `${selectedPair.curr[0]}`;

  return (  
    <div className="detail-container">
      <h4>Operation ID: {selectedPair['order']}</h4>
      <h5>Approximate price: {(+(selectedPair['euro'])).toFixed(2)} €</h5>
      <h5>Total foreign currency: {(+selectedPair.curr[1]).toFixed(2)} {curr}</h5>
      <h5>Commission: {commission} €</h5>
      <h5>Total price: {(+(selectedPair['euro']) + commission).toFixed(2)} €</h5>
    </div>
    
  );
}
 
export default ExchangeDetail;
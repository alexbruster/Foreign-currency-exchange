import { useLocation } from "react-router";

const ExchangeDetail = () => {

  const location = useLocation();
  const operation = location.state.operation;
  const commission = 10;

  return (  
    <div className="detail-container">
      <h4>Operation ID: {operation.order}</h4>
      <h5>Approximate price: {(+operation.euro).toFixed(2)} €</h5>
      <h5>Total foreign currency: {(+operation.curr[1]).toFixed(2)} {operation.curr[0]}</h5>
      <h5>Commission: {commission} €</h5>
      <h5>Total price: {(+(operation.euro) + commission).toFixed(2)} €</h5>
    </div>
    
  );
}
 
export default ExchangeDetail;
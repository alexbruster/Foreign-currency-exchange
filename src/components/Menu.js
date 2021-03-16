import { Link } from "react-router-dom";

const Menu = () => {
  return ( 
    <div className="menu">
      <Link to="/list">
        <h4>
          Currency exchange
        </h4>
      </Link>
   </div> 
  );
}

export default Menu;
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CurrencyContext = createContext();

const CurrencyProvider = (props) => {

  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const getCurrencies = async () => {
      const url = 'https://api.exchangeratesapi.io/latest?base=EUR';
      try {
        const response = await axios.get(url);
        setCurrencies(response.data.rates)
      } catch (error) {
        console.log(error);
      }
    }
    getCurrencies();
  }, []);

  return(
    <CurrencyContext.Provider
      value={{
        currencies
      }}
    >
      {props.children}
    </CurrencyContext.Provider>
  )
}
export default CurrencyProvider;
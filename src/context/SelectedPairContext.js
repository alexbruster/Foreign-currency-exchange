import { createContext, useEffect, useState } from "react";

export const SelectedPairContext = createContext();

const SelectedPairProvider = (props) => {

  const [selectedPair, setSelectedPair] = useState({});

  useEffect(() => {
    setSelectedPair(selectedPair);
  }, [selectedPair])

  return (
    <SelectedPairContext.Provider
      value={{
        selectedPair,
        setSelectedPair
      }}
    >
      {props.children}
    </SelectedPairContext.Provider>
  )
}

export default SelectedPairProvider;
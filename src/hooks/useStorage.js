const UseStorage = {

  getPair: () => {
    const operations = [];
    for(let i=0; i<sessionStorage.length; i++) {
      let key = sessionStorage.key(i);
      let operation = JSON.parse(sessionStorage.getItem(key));
      operations.push(operation); 
    }
    return operations;
  },

  setPair: (key, pair) => sessionStorage.setItem(key, pair),

  removePair: (pair) => sessionStorage.removeItem(pair)
}

export default UseStorage;
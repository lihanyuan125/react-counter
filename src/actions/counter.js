export function increment() {
  return {
    type: "INCREMENT"
  };
}

export function decrement() {
  return {
    type: "DECREMENT"
  };
}

export function Asyncdecrement() {
  return function name(dispatch, getState) {
    setTimeout(() => {
      dispatch(increment());
    }, 3000);
  };
}

export function incrementifOdd() {
  return function(disptch, getState) {
     const { counter } = getState()
     console.log(counter);
     if(counter % 2){
        disptch(increment())
     }
  };
}

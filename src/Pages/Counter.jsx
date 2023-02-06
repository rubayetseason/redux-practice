import React, { useReducer } from "react";

const Counter = () => {
  const initialState = 0;
  const reducer = (state, action) => {
if(action.type === "INCREMENT"){
  return state + action.payload;
}
else if(action.type === "DECREMENT"){
return state - action.payload;
}
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex gap-10">
      <div>
        <button onClick={() => dispatch({
          type : "INCREMENT", payload : 5
        })} className="bg-red-600 text-white text-xl p-3">Increase</button>
      </div>
      <div className="text-5xl">{state}</div>
      <div>
        <button onClick={() => dispatch({
          type : "DECREMENT", payload : 5
        })} className="bg-red-600 text-white text-xl p-3">Decrease</button>
      </div>
    </div>
  );
};

export default Counter;

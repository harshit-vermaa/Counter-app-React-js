import React, { useState } from "react";

const App = () => {
  let [currentnum,updatenum] = useState(0)
  let plus = () => {
    updatenum(currentnum + 1)
    console.log('plus');
    return updatenum;
  }
  let minus = () => {
    updatenum(currentnum - 1)
    console.log('minus'); 
    if (currentnum >= 1) 
    { 
      return updatenum; 
    }
    else 
    {
      alert("number goes to negative");
      return updatenum(0);
    }
  }
  return(
    <>
    <div className="main">
    <div className="box">
      <h1>Counter App</h1>
      <br/>
      <h1>{currentnum}</h1>
      <div className="buttons">
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      </div>
    </div>
    </div>
    </>
  )
}
export default App;
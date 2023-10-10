import './App.css';

import { useSelector , useDispatch} from "react-redux";
import {incNumber , decNumber } from "./actions/index"

function App() {
  const mystate = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="app-container">
        <h1 className="counter-heading">Increment & Decrement counter</h1>
        <h4 className="sub-heading">React redux</h4>

        <div className="counter">
          <button className="counter-button" href="-" onClick={() => dispatch(decNumber())}>-</button>
          <input type="text" className="counter-input"  value={mystate} /> 
          <button className="counter-button" href="+" onClick={() => dispatch(incNumber(5))}>+</button>
        </div>
      </div>
    </>
  );
}

export default App;

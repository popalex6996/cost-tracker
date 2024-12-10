import React, { useReducer } from "react";

import CostForm from "./components/CostForm/CostForm";
import CostList from "./components/CostList/CostList";
import { Action, Cost, State } from "./types";
import "./App.css";

//Initial state variable
const initialState: State = {
  costs: [
    { name: "cost 1", amount: 100, date: new Date() },
    { name: "cost 2", amount: 200, date: new Date() },
    { name: "cost 3", amount: 100, date: new Date() },
    { name: "cost 4", amount: 400, date: new Date() },
  ],
};

//Reducer func that manages state
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_COST":
      return { ...state, costs: [...state.costs, action.payload] };
    case "REMOVE_COST":
      return {
        ...state,
        costs: state.costs.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

const App: React.FC = () => {
  //App state
  const [state, dispatch] = useReducer(reducer, initialState);

  //Add new cost func
  const addCost = (Cost: Cost) => dispatch({ type: "ADD_COST", payload: Cost });

  //Func that removes cost by index
  const removeCost = (index: number) => () =>
    dispatch({ type: "REMOVE_COST", payload: index });

  return (
    <div className="app">
      {/* Cost form component */}
      <CostForm addCost={addCost} />
      {/* Cost List component */}
      <CostList costs={state.costs} removeCost={removeCost} />
    </div>
  );
};

export default App;

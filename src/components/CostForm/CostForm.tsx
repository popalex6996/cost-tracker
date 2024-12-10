import React, { useState } from "react";

import CostAmountInput from "../Inputs/CostAmountInput";
import CostDateInput from "../Inputs/CostDateInput";
import CostNameInput from "../Inputs/CostNameInput";
import { Cost } from "../../types";
import "./index.css";

interface CostFormProps {
  addCost: (cost: Cost) => void;
}

const CostForm: React.FC<CostFormProps> = ({ addCost }) => {
  //Name variable
  const [name, setName] = useState("");
  //Amount variable
  const [amount, setAmount] = useState("");
  //Date variable
  const [date, setDate] = useState("");

  //Func that add cost on form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && amount && date) {
      addCost({ name, amount: Number(amount), date: new Date(date) });
      setName("");
      setAmount("");
      setDate("");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* CostNameInput component */}
      <CostNameInput value={name} onChange={(e) => setName(e.target.value)} />

      {/* CostAmountInput component */}
      <CostAmountInput
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      {/* CostDateInput component */}
      <CostDateInput value={date} onChange={(e) => setDate(e.target.value)} />

      {/* Add cost button */}
      <button className="add-btn" type="submit">
        Додати витратку
      </button>
    </form>
  );
};

export default CostForm;

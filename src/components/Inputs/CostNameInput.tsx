import React, { ChangeEventHandler } from "react";

interface CostNameInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const CostNameInput: React.FC<CostNameInputProps> = ({ value, onChange }) => (
  <input
    className="input"
    type="text"
    placeholder="Введіть витрату"
    value={value}
    onChange={onChange}
    required
  />
);

export default CostNameInput;

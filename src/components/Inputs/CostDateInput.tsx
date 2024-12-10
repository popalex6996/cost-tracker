import React, { ChangeEventHandler } from "react";

interface CostDateInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const CostDateInput: React.FC<CostDateInputProps> = ({ value, onChange }) => (
  <input
    className="input"
    type="date"
    value={value}
    onChange={onChange}
    required
  />
);

export default CostDateInput;

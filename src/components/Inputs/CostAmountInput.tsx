import React, { ChangeEventHandler } from "react";

interface CostAmountInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const CostAmountInput: React.FC<CostAmountInputProps> = ({
  value,
  onChange,
}) => (
  <input
    className="input"
    type="number"
    placeholder="Введіть суму"
    value={value}
    onChange={onChange}
    required
  />
);

export default CostAmountInput;

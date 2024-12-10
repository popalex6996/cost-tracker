import React from "react";

import { Cost } from "../../types";
import "./index.css";

interface CostItemProps {
  cost: Cost;
  removeCost: () => void;
}

const CostItem: React.FC<CostItemProps> = ({ cost, removeCost }) => {
  const { name, amount, date } = cost;
  return (
    <li className="item">
      {/* Name */}
      <span className="detail">{name}</span>

      {/* Amount */}
      <span className="detail"> ${amount.toFixed(2)}</span>

      {/* Date */}
      <span className="detail">{date.toDateString()}</span>

      {/* Remove cost button */}
      <button className="delete-btn" onClick={removeCost}>
        x
      </button>
    </li>
  );
};

export default CostItem;

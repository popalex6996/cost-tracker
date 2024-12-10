import React, { useEffect, useState } from "react";

import CostItem from "../CostItem/CostItem";
import { Cost } from "../../types";
import "./index.css";

interface CostListProps {
  costs: Cost[];
  removeCost: (index: number) => () => void;
}

//Sort type
type SortType = "byName" | "byAmount" | "byDate";

//Sort buttons details array for mapping
const sortBtns = [
  {
    title: "Витрата",
    sortTitle: "byName",
  },
  {
    title: "Сума",
    sortTitle: "byAmount",
  },
  {
    title: "Дата витрати",
    sortTitle: "byDate",
  },
];

const CostList: React.FC<CostListProps> = ({ costs, removeCost }) => {
  //Total cost variable
  const totalCost = costs.reduce((total, cost) => total + cost.amount, 0);

  //Sorted costs variable
  const [sortedCosts, setCosts] = useState<Cost[]>(costs);

  //Sort type variable
  const [sort, setSort] = useState<SortType>();

  //Sort order type variable
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">();

  //Name sort functionality
  const sortByName = () => {
    const newCosts = costs.sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name),
    );
    setCosts(() => newCosts);
  };

  //Amount sort functionality
  const sortByAmount = () => {
    const newCosts = costs.sort((a, b) =>
      sortOrder === "asc" ? a.amount - b.amount : b.amount - a.amount,
    );
    setCosts(newCosts);
  };

  //Date sort functionality
  const sortByDate = () => {
    const newCosts = costs.sort((a, b) =>
      sortOrder === "asc" ? +b.date - +a.date : +a.date - +b.date,
    );
    setCosts(newCosts);
  };

  //Sorting costs on costs props, sort variable or sortOrder variable changes
  useEffect(() => {
    switch (sort) {
      case "byName":
        sortByName();
        break;

      case "byAmount":
        sortByAmount();
        break;

      case "byDate":
        sortByDate();
        break;

      default:
        sortByName();
        break;
    }
  }, [costs, sort, sortOrder]);

  return (
    <div className="list-wrapper">
      {/* Cost list title */}
      <div className="list-btns-wrapper">
        {/* Sort buttons */}
        {sortBtns.map(({ title, sortTitle }) => (
          <button
            className="list-btn"
            onClick={() => {
              if (sort === sortTitle) {
                setSortOrder(sortOrder === "desc" ? "asc" : "desc");
              } else {
                setSortOrder("asc");
                setSort(sortTitle as SortType);
              }
            }}
          >
            {title} {sortTitle === sort && sortOrder === "asc" && "↓"}
            {sortTitle === sort && sortOrder === "desc" && "↑"}
          </button>
        ))}
      </div>

      {/* Cost list content */}
      <ul className="list">
        {sortedCosts.map((cost, index) => (
          <CostItem
            key={"cost-item-" + index}
            cost={cost}
            removeCost={removeCost(index)}
          />
        ))}
      </ul>

      {/* Total cost amount */}
      {!!totalCost && (
        <div className="total-cost">
          <span>Загально: {totalCost}</span>
        </div>
      )}
    </div>
  );
};

export default CostList;

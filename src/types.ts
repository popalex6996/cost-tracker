export interface Cost {
  name: string;
  amount: number;
  date: Date;
}

export interface State {
  costs: Cost[];
}

export type Action =
  | { type: "ADD_COST"; payload: Cost }
  | { type: "REMOVE_COST"; payload: number };

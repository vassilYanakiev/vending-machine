import { createContext } from "react";
import { Product, ACTIONTYPE } from "./reducer";

export interface VendingContextType {
  state: {
    products: Product[];
    purchased: Product[];
    status: string;
    [key: string]: Product[] | string;
  };
}
export interface VendingDispatchContext {
  dispatch: React.Dispatch<ACTIONTYPE>;
}

//Splitting the context into two parts, one for the state and one for the dispatch to consume independently and avoid unnecessary re-renders

export const VendingContext = createContext<VendingContextType>({
  state: { products: [], purchased: [], status: "" },
});

export const VendingDispatchContext = createContext<VendingDispatchContext>({
  dispatch: () => {},
});

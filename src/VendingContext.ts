import React from "react";
import { Product, ACTIONTYPE } from "./reducer";

export interface VendingContextType {
  state: {
    products: Product[];
  };
  dispatch: React.Dispatch<ACTIONTYPE>; // replace 'any' with the type of your actions
}

const VendingContext = React.createContext<VendingContextType>({
  state: { products: [] },
  dispatch: () => {},
});

export default VendingContext;

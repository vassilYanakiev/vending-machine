import React from "react";
import { Product, ACTIONTYPE } from "./reducer";

export interface VendingContextType {
  state: {
    products: Product[];
    purchased: Product[];
    status: string;
  };
  dispatch: React.Dispatch<ACTIONTYPE>; // replace 'any' with the type of your actions
}

const VendingContext = React.createContext<VendingContextType>({
  state: { products: [], purchased: [], status: "" },
  dispatch: () => {},
});

export default VendingContext;

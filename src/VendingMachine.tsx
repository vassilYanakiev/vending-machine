import { useReducer, useEffect } from "react";
import ProductList from "./components/products/ProductList";
import Dispenser from "./components/dispenser/Dispenser";
import CoinInput from "./components/pannel/Pannel";
import { VendingContext, VendingDispatchContext } from "./VendingContext";
import "./VendingMachine.scss";
import { reducer, initialState } from "./reducer";

function VendingMachine() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    try {
      fetch("/server.json")
        .then((resp) => {
          if (!resp.ok) {
            throw new Error("HTTP error " + resp.status);
          }
          return resp.json();
        })
        .then((payload) => {
          dispatch({
            type: "FETCH_PRODUCTS",
            payload,
          });
        });
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching products");
    }
  }, []);

  return (
    <VendingContext.Provider
      value={{
        state,
      }}
    >
      <VendingDispatchContext.Provider value={{ dispatch }}>
        <div className="VendingMachine">
          <div className="MainContent ">
            <ProductList />
            <Dispenser />
          </div>
          <CoinInput />
        </div>
      </VendingDispatchContext.Provider>
    </VendingContext.Provider>
  );
}

export default VendingMachine;

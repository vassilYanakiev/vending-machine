import { useReducer, useEffect } from "react";
import ProductList from "./components/products/ProductList";
import Dispenser from "./components/dispenser/Dispenser";
import CoinInput from "./components/coins/Coins";
import "./VendingMachine.scss";
import { reducer, initialState } from "./reducer";

function VendingMachine() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/server.json")
      .then((resp) => resp.json())
      .then((payload) => {
        console.log(
          "🚀 ~ file: VendingMachine.tsx:15 ~ .then ~ payload:",
          payload
        );

        dispatch({
          type: "SET_PRODUCTS",
          payload,
        });
      });

    return () => {
      console.log("cleanup");
    };
  }, []);

  if (!state.products) {
    return <div>Loading products</div>;
  }

  return (
    <>
      <div className="VendingMachine">
        <div className="MainContent ">
          <ProductList products={state.products} />
          <Dispenser />
        </div>
        <CoinInput />
      </div>
    </>
  );
}

export default VendingMachine;

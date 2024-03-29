import { useContext, useState } from "react";
import useProducts from "../../hooks/useProducts";
import { Product } from "../../reducer";
import { VendingDispatchContext } from "../../VendingContext";
import "./Pannel-styling.scss";

const Selector = ({
  amount,
  setAmount,
}: {
  amount: number;
  setAmount: (value: number) => void;
}) => {
  const { dispatch } = useContext(VendingDispatchContext);
  const [products] = useProducts<Product>("products");
  const [selection, setSelection] = useState<number | null>(null);
  const selectedProduct =
    products?.find((product) => product.productId === selection) || null;
  const price = selectedProduct?.price || 0;
  const amountLeft = selectedProduct?.count || 0;

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount < price) {
      dispatch({
        type: "SET_STATUS",
        payload: "INSUFFICIENT CREDIT",
      });
    } else if (amountLeft! <= 0) {
      dispatch({
        type: "SET_STATUS",
        payload: "OUT OF STOCK",
      });
    } else {
      const newAmount = amount - price;
      setAmount(newAmount);
      setSelection(null);
      dispatch({ type: "PURCHASE", payload: selection as number });
      dispatch({
        type: "SET_STATUS",
        payload: `YOUR CREDIT IS ${((amount * 10 - price * 10) / 10).toFixed(
          2
        )}`,
      });
    }
    setTimeout(() => {
      dispatch({
        type: "SET_STATUS",
        payload: "",
      });
    }, 3000);
  };

  const handleReset = () => {
    setAmount(0);
    setSelection(null);
    dispatch({
      type: "SET_STATUS",
      payload: `YOUR CHANGE IS ${amount.toFixed(2)}`,
    });
    setTimeout(() => {
      dispatch({
        type: "SET_STATUS",
        payload: "",
      });
    }, 3000);
  };

  return (
    <>
      <form className="selector">
        <h3>Select your item</h3>
        <input
          type="number"
          placeholder="Product"
          min={1}
          value={selection || ("" as unknown as number)}
          onChange={(e) => setSelection(parseInt(e.target.value))}
        />
        <button
          disabled={!selectedProduct}
          onClick={(event) => handlePurchase(event)}
        >
          BUY
        </button>
      </form>
      <button disabled={!amount} className="reset" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

export default Selector;

import { useContext, useState } from "react";
import VendingContextType from "../../VendingContext";
import "./Pannel-styling.scss";

const Selector = ({
  amount,
  setAmount,
}: {
  amount: number;
  setAmount: (value: number) => void;
}) => {
  const [selection, setSelection] = useState<number | null>(null);
  const {
    state: { products },
    dispatch,
  } = useContext(VendingContextType);

  const selectedProduct =
    products?.find((product) => product.productId === selection) || null;

  const price = selectedProduct?.price || 0;
  const amountLeft = selectedProduct?.count;

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount < price!) {
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
      payload: `YOUR CHANGE IS ${amount}`,
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
      <form className="Selector">
        <h3>Select your item</h3>
        <input
          type="number"
          placeholder="Product"
          min={1}
          max={12}
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
      <button disabled={!amount} className="Reset" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

export default Selector;

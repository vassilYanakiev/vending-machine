import { useContext } from "react";
import { VendingContext } from "../../VendingContext";
import "./Pannel-styling.scss";

const Display = ({ amount }: { amount: number }) => {
  const {
    state: { status },
  } = useContext(VendingContext);

  return (
    <div className="display">
      <div className="credit">
        <span>{`Credit: ${amount.toFixed(2)}`}</span>
      </div>
      <div className="message">
        <span>{status}</span>
      </div>
    </div>
  );
};

export default Display;

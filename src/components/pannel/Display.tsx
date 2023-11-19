import { useContext } from "react";
import VendingContextType from "../../VendingContext";
import "./Pannel-styling.scss";

const Display = ({ amount }: { amount: number }) => {
  const {
    state: { status },
  } = useContext(VendingContextType);

  return (
    <div className="Display">
      <div className="credit">
        <span>{`Credit: ${amount.toFixed(2)}`}</span>
      </div>
      <div className="Message">
        <span>{status}</span>
      </div>
    </div>
  );
};

export default Display;

import { useContext } from "react";
import { VendingContext } from "../../VendingContext";

const Dispenser = () => {
  const { state } = useContext(VendingContext);

  return (
    <>
      <div className="dispenser-header">Dispenser</div>
      <div className="dispenser">
        {state.purchased.map(({ productId, productName, count }) => (
          <div key={`${productId}-${count}`} className="product">
            {productName}
          </div>
        ))}
      </div>
    </>
  );
};

export default Dispenser;

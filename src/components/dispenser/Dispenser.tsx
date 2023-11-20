import { useContext } from "react";
import { VendingContext } from "../../VendingContext";

const Dispenser = () => {
  const { state } = useContext(VendingContext);

  return (
    <>
      <div className="dispenser-header">Dispenser</div>
      <div className="dispenser">
        {state.purchased.map(({ productId, productName }) => (
          <div key={productId} className="product">
            {productName}
          </div>
        ))}
      </div>
    </>
  );
};

export default Dispenser;

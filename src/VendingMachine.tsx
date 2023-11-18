import ProductList from "./products/ProductList";
import Dispenser from "./dispenser/Dispenser";
import CoinInput from "./coins/Coins";
import "./VendingMachine.scss";

function VendingMachine() {
  return (
    <>
      <div className="VendingMachine">
        <div className="MainContent ">
          <ProductList />
          <Dispenser />
        </div>
        <CoinInput />
      </div>
    </>
  );
}

export default VendingMachine;

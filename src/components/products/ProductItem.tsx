import { useContext } from "react";
import { Product } from "../../reducer";
import VendingContext from "../../VendingContext";

const ProductItem = ({ product }: { product: Product }) => {
  const { dispatch } = useContext(VendingContext);

  const handleAddToBasket = () => {
    dispatch({ type: "PURCHASE", payload: product });
  };

  return <div onClick={handleAddToBasket}>{product.productName}</div>;
};

export default ProductItem;

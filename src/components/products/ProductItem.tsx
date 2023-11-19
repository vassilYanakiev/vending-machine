import { useContext } from "react";
import { Product } from "../../reducer";
import VendingContext from "../../VendingContext";
import "./ProductItem.scss";

const ProductItem = ({ product }: { product: Product }) => {
  const { productId, productName, price, category } = product;
  const { dispatch } = useContext(VendingContext);

  const handleAddToBasket = () => {
    dispatch({ type: "PURCHASE", payload: productId });
  };

  return (
    <div className="card">
      <div className="productId">{productId} </div>
      <div className="name">{productName}</div>
      <div className="category">{category}</div>
      <div className="price">{`Price: ${price}`}</div>
    </div>
  );
};

export default ProductItem;

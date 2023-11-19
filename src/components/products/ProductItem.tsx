import { Product } from "../../reducer";
import "./ProductItem.scss";

const ProductItem = ({ product }: { product: Product }) => {
  const { productId, productName, price, category, count } = product;
  const cardClass = `card ${count === 0 ? "exhausted" : ""}`;
  return (
    <div className={cardClass}>
      <div className="productId">{productId} </div>
      <div className="name">{`${productName} (${count})`}</div>
      <div className="category">{category}</div>
      <div className="price">{`Price: ${price}`}</div>
    </div>
  );
};

export default ProductItem;

import { useContext } from "react";
import { Product } from "../../reducer";
import ProductItem from "./ProductItem";
import { VendingContext } from "../../VendingContext";

const ProductList = () => {
  const {
    state: { products },
  } = useContext(VendingContext);

  return (
    <div className="product-list">
      {products?.map((product: Product) => (
        <ProductItem key={product.productId} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

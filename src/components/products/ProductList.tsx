import { useContext } from "react";
import { Product } from "../../reducer";
import ProductItem from "./ProductItem";
import VendingContextType from "../../VendingContext";

const ProductList = () => {
  const {
    state: { products },
  } = useContext(VendingContextType);

  return (
    <div className="ProductList">
      {products?.map((product: Product) => (
        <ProductItem key={product.productId} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

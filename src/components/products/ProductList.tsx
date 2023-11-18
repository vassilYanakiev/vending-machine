import { Product } from "../../reducer";
import ProductItem from "./ProductItem";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  // const { products } = useContext(VendingMachineContext);

  return (
    <div className="ProductList">
      {products.map((product: Product) => (
        <ProductItem key={product.productId} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

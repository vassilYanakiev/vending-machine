import { Product } from "../../reducer";

const ProductItem = ({ product }: { product: Product }) => {
  // const { dispatch } = useContext(VendingMachineContext);

  // const handleAddToBasket = () => {
  //     dispatch({ type: "ADD_TO_BASKET", payload: product });
  // };

  return <div>{product.productName}</div>;
};

export default ProductItem;

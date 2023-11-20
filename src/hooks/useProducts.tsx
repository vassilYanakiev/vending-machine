import { useContext, useState } from "react";
import { VendingContext } from "../VendingContext";
import { Product } from "../reducer";

// Can be made generic with a slot parameter and returning e.g. purchased items
const useProducts = <T extends Product>(slot: string) => {
  const [products, setProducts] = useState<T[] | null>(null);

  const { state } = useContext(VendingContext);

  const loadedProducts = state[slot];

  if (!products && loadedProducts) {
    setProducts(loadedProducts as T[]);
  }

  return [products] as const;
};

export default useProducts;

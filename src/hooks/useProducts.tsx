import { useContext, useState, useEffect } from "react";
import { VendingContext } from "../VendingContext";
import { Product } from "../reducer";

// Can be made generic with a slot parameter and returning e.g. purchased items
const useProducts = <T extends Product>(slot: string) => {
  const [products, setProducts] = useState<T[] | null>(null);

  const { state } = useContext(VendingContext);
  const loadedProducts = state[slot];

  useEffect(() => {
    if (loadedProducts.length > 0) {
      setProducts(loadedProducts as T[]);
    }
  }, [loadedProducts]);

  return [products] as const;
};

export default useProducts;

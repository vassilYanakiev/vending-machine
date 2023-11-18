export type Product = {
  productId: string;
  count: string;
  category: number;
  productName: number;
  price: number;
  image?: string;
};

export type ACTIONTYPE =
  | { type: "SET_PRODUCTS"; payload: Product[] }
  | { type: "PURCHASE"; payload: Product }
  | { type: "UPDATE_PRODUCTS"; payload: string }
  | { type: "CANCEL_ORDER" };

export const initialState = {
  products: [] as Product[],
  basket: [],
  credit: 0,
};

type State = typeof initialState;

export const reducer = (state: State, action: ACTIONTYPE): State => {
  console.log("🚀 ~ file: reducer.tsx:80 ~ action.type", action.type);
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "PURCHASE":
      return {
        ...state,
      };
    case "UPDATE_PRODUCTS":
      return {
        ...state,
      };
    case "CANCEL_ORDER":
      return {
        ...state,
      };
    default:
      throw new Error();
  }
};

export default reducer;

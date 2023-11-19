export type Product = {
  productId: number;
  count: number;
  category: number;
  productName: number;
  price: number;
  image?: string;
};

export type ACTIONTYPE =
  | { type: "FETCH_PRODUCTS"; payload: Product[] }
  | { type: "PURCHASE"; payload: number }
  | { type: "UPDATE_PRODUCTS"; payload: string }
  | { type: "CANCEL_ORDER" }
  | { type: "SET_STATUS"; payload: string };

export const initialState = {
  products: [] as Product[],
  purchased: [] as Product[],
  status: "",
};

type State = typeof initialState;

export const reducer = (state: State, action: ACTIONTYPE): State => {
  console.log("🚀 ~ file: reducer.tsx:80 ~ action.type", action.type);
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "PURCHASE":
      return {
        ...state,
        purchased: [...state.purchased, state.products[action.payload - 1]],
        products: state.products.map((product) => {
          if (product.productId === action.payload) {
            return {
              ...product,
              count: product.count - 1,
            };
          }
          return product;
        }),
      };
    case "SET_STATUS":
      return {
        ...state,
        status: action.payload,
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

import { reducer, initialState } from "./reducer.tsx";

describe("reducer", () => {
  it("should handle FETCH_PRODUCTS", () => {
    const products = [
      { productId: 1, count: 10, category: 1, productName: 1, price: 100 },
      { productId: 2, count: 20, category: 2, productName: 2, price: 200 },
    ];
    const action = { type: "FETCH_PRODUCTS", payload: products };
    const state = reducer(initialState, action);
    expect(state.products).toEqual(products);
  });

  it("should handle PURCHASE", () => {
    const product = {
      productId: 1,
      count: 10,
      category: 1,
      productName: 1,
      price: 100,
    };
    const initialStateWithProduct = { ...initialState, products: [product] };
    const action = { type: "PURCHASE", payload: product.productId };
    const state = reducer(initialStateWithProduct, action);
    expect(state.purchased).toEqual([product]);
    expect(state.products[0].count).toEqual(product.count - 1);
  });

  it("should handle SET_STATUS", () => {
    const status = "new status";
    const action = { type: "SET_STATUS", payload: status };
    const state = reducer(initialState, action);
    expect(state.status).toEqual(status);
  });
});

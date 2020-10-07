import createDatacontext from "./createDataContext";
import shoeApi from "../api/shoeApi";

const initialState = {
  products: [],
  loading: true,
};

const productContext = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT":
      let fetchedProduct = action.payload.map((item) => {
        return { ...item, isIncart: false };
      });

      return { ...state, products: fetchedProduct, loading: false };
    default:
      return state;
  }
};

const fetchProducts = (dispatch) => async () => {
  try {
    const { data } = await shoeApi.get("/");

    dispatch({ type: "FETCH_PRODUCT", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_PRODUCT", payload: [] });
  }
};

export const { Context, Provider } = createDatacontext(
  productContext,
  {
    fetchProducts,
  },
  initialState
);

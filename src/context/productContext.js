import store from "store2";
import createDatacontext from "./createDataContext";
import shoeApi from "../api/shoeApi";
import { computeTotalPrice } from "../utils/helpers";

const initialState = {
  products: [],
  loading: true,
  cart: {
    cartItems: [],
    cartTotalPrice: 0,
  },
};

const productContext = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT":
      let fetchedProduct;

      if (!action.payload.cartItems) {
        fetchedProduct = action.payload.data.map((item) => {
          return { ...item, isIncart: false };
        });
      } else {
        const {
          cart: { cartItems },
        } = action.payload.cartItems;

        fetchedProduct = action.payload.data.map((item) => {
          if (cartItems.filter((el) => el.id === item.id).length > 0) {
            return { ...item, isIncart: true };
          }
          return { ...item, isIncart: false };
        });
      }

      return { ...state, products: fetchedProduct, loading: false };

    case "ADD_TO_CART":
      return {
        ...state,
        products: action.payload.newProduct,
        cart: action.payload.cart,
      };

    case "CHANGE_QUANTITY":
      return {
        ...state,
        cart: action.payload.cart,
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: action.payload.cart,
      };

    case "INITIAL_CART":
      if (!action.payload) {
        return {
          ...state,
          cart: {
            cartItems: [],
            cartTotalPrice: 0,
          },
        };
      } else {
        return {
          ...state,
          cart: action.payload.cart,
        };
      }

    default:
      return state;
  }
};

const fetchProducts = (dispatch) => async () => {
  try {
    const { data } = await shoeApi.get("/");

    const cart = await store.get("cart");

    dispatch({ type: "FETCH_PRODUCT", payload: { data, cartItems: cart } });
  } catch (error) {
    dispatch({ type: "FETCH_PRODUCT", payload: [] });
  }
};

const addTocart = (dispatch) => async (product, state) => {
  let newProduct = state.products.map((item) => {
    if (item.id === product.id) {
      return { ...item, isIncart: true };
    }
    return item;
  });

  let newCartItems = [
    ...state.cart.cartItems,
    {
      ...product,
      isIncart: true,
      quantity: 1,
      totalPrice: product.price,
    },
  ];

  await store.set("cart", {
    cart: {
      cartItems: newCartItems,
      cartTotalPrice: computeTotalPrice(newCartItems),
    },
  });

  dispatch({
    type: "ADD_TO_CART",
    payload: {
      newProduct,
      cart: {
        cartItems: newCartItems,
        cartTotalPrice: computeTotalPrice(newCartItems),
      },
    },
  });
};

const changeQuantity = (dispatch) => async (id, value, state) => {
  let newCartQuantities = state.cart.cartItems.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        quantity: item.quantity + value,
        totalPrice: item.totalPrice + value * item.price,
      };
    }
    return item;
  });

  await store.set("cart", {
    cart: {
      cartItems: newCartQuantities,
      cartTotalPrice: computeTotalPrice(newCartQuantities),
    },
  });

  dispatch({
    type: "CHANGE_QUANTITY",
    payload: {
      cart: {
        cartItems: newCartQuantities,
        cartTotalPrice: computeTotalPrice(newCartQuantities),
      },
    },
  });
};

const removeFromCart = (dispatch) => async (id, state) => {
  let remainingItems = state.cart.cartItems.filter((item) => item.id !== id);

  await store.set("cart", {
    cart: {
      cartItems: remainingItems,
      cartTotalPrice: computeTotalPrice(remainingItems),
    },
  });

  dispatch({
    type: "REMOVE_FROM_CART",
    payload: {
      cart: {
        cartItems: remainingItems,
        cartTotalPrice: computeTotalPrice(remainingItems),
      },
    },
  });
};

const initialiseCart = (dispatch) => async () => {
  try {
    const cart = await store.get("cart");
    dispatch({ type: "INITIAL_CART", payload: cart });
  } catch (error) {
    dispatch({ type: "INITIAL_CART", payload: null });
  }
};

export const { Context, Provider } = createDatacontext(
  productContext,
  {
    fetchProducts,
    addTocart,
    changeQuantity,
    removeFromCart,
    initialiseCart,
  },
  initialState
);

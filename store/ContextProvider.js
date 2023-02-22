import CartContext from './ctx-obj';
import { useReducer } from 'react';

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const fruitInCart = state.items.find(
      (fruit) => fruit.id === action.value.id
    );

    const updatedTotalAmount = state.totalAmount + action.value.price;
    const fruit = { ...action.value };

    let updatedItems;

    if (fruitInCart) {
      fruitInCart.items += 1;
      updatedItems = state.items.concat();
    } else {
      fruit.items = 1;
      updatedItems = state.items.concat(fruit);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultState;
};
const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);

  const addItemHandler = (item) => {
    dispatchCartAction({ type: 'ADD', value: item });
  };

  const cartCTX = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
  };

  return (
    <CartContext.Provider value={cartCTX}>{children}</CartContext.Provider>
  );
};

export default CartProvider;

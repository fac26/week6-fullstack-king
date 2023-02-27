import CartContext from './ctx-obj';
import { useReducer, useState } from 'react';

const calculateTotalAmount = (items) =>
  items.reduce(
    (acc, currentItem) => acc + currentItem.items * currentItem.price,
    0
  );

const CartProvider = (props) => {
  const [cartState, setCartState] = useState([]);

  const addItem = (newItem) => {
    const fruitFromCart = cartState.find((fruit) => fruit.id === newItem.id);
    if (!fruitFromCart) setCartState([...cartState, { ...newItem, items: 1 }]);

    setCartState(
      cartState.map((existingItem) => {
        if (existingItem.id !== newItem.id) return existingItem;
        return { ...existingItem, items: existingItem.items + 1 };
      })
    );
  };

  const removeItemHandler = () => {};
  const cartCTX = {
    items: cartState,
    totalAmount: calculateTotalAmount(cartState),
    addItem,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartCTX}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

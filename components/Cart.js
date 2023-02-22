import { useContext } from 'react';
import ctx from '@/store/ctx-obj';

export default function Cart() {
  const cartCTX = useContext(ctx);
  const items = cartCTX.items;

  return (
    <>
      {items.length > 0 ? (
        <div>
          <h1>Cart</h1>
          <ul>
            {items.map((element) => (
              <li key={element.id + Math.random()}>
                <p>{element.title}</p>
                <p>items: {element.items}</p>
              </li>
            ))}
          </ul>
          <p>£ {cartCTX.totalAmount.toFixed(2)}</p>
        </div>
      ) : (
        <div>
          <h1>Cart</h1>
          <p>Cart is empty</p>
        </div>
      )}
    </>
  );
}

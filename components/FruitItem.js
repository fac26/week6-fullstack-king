import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import React, { useContext } from 'react';
import ctx from '@/store/ctx-obj';

export default function FruitItem(props) {
  const { id, title, image, price, link } = props;

  const cartCTX = useContext(ctx);
  const addToBasket = () => cartCTX.addItem(props);

  return (
    <li id={id}>
      <h3>{title}</h3>
      <div>
        <div>
          <Image src={image} alt={title} width="40" height="40" />
        </div>
        <p>£ {price}</p>
      </div>
      <div>
        <Link href={link}>See more at {title}</Link>
      </div>
      <Button onClick={addToBasket}>Add to Cart</Button>
    </li>
  );
}

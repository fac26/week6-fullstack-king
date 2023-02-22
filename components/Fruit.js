import Image from 'next/image';
import Button from './Button';
import ctx from '@/store/ctx-obj';
import React, { useContext } from 'react';

export default function FruitPage(props) {
  const { title, image_path, description, price } = props;
  const addToBasket = () => cartCTX.addItem(props);
  const cartCTX = useContext(ctx);

  return (
    <>
      <h1>{title}</h1>
      <div>
        <Image src={image_path} alt={title} width="300" height="300" />
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <p>£ {price}</p>
      </div>
      <Button onClick={addToBasket}>Add to Cart</Button>
    </>
  );
}

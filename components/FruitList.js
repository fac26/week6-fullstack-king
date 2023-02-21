import FruitItem from './FruitItem';

export default function FruitList(props) {
  return props.fruits.map((fruit) => {
    return (
      <FruitItem
        key={fruit.id}
        id={fruit.id}
        title={fruit.title}
        image={fruit.image_path}
        price={fruit.price}
        link={`/fruits/${fruit.id}`}
      />
    );
  });
}

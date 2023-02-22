import { getAllIds, getFruitById } from '@/model/fruits';
import Fruit from '@/components/Fruit';

export async function getStaticPaths() {
  const fruitIDs = getAllIds().map((fruit) => ({
    params: {
      fruit_id: fruit.id.toString(),
    },
  }));

  return {
    paths: fruitIDs,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const fruit = getFruitById(params.fruit_id);

  return {
    props: {
      fruitData: fruit,
    },
  };
}

export default function FruitDetail({ fruitData }) {
  return (
    <Fruit
      id={fruitData.id}
      title={fruitData.title}
      image_path={fruitData.image_path}
      description={fruitData.fruit_description}
      price={fruitData.price}
    />
  );
}

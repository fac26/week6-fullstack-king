import Head from 'next/head';
import FruitList from '@/components/FruitList';
import fruits from '@/lib/data';

export default function Berries({ fruit_data }) {
  return (
    <>
      <Head>
        <title>Berries</title>
      </Head>
      <div>
        <FruitList fruits={fruit_data} />
      </div>
    </>
  );
}

export function getStaticProps() {
  const allFruits = fruits.filter((fruit) => fruit.fruit_type === 'Berries');

  return {
    props: {
      fruit_data: allFruits,
    },
  };
}

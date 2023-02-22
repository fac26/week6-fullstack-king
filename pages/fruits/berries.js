import Head from 'next/head';
import FruitList from '@/components/FruitList';
import { getFruitByType } from '@/model/fruits.js';

export default function Home({ fruit_data }) {
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

export async function getStaticProps() {
  const allFruits = await getFruitByType('Berries');

  return {
    props: {
      fruit_data: allFruits,
    },
  };
}

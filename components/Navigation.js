import Link from 'next/link';
import classes from './Navigation.module.css';

export default function Navigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Fruit king</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/">All Fruits</Link>
          </li>
          <li>
            <Link href="/fruits/berries">Berries</Link>
          </li>
          <li>
            <Link href="/fruits/citrus">Citrus</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

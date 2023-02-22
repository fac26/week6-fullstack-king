import Cart from '@/components/Cart';
import CartProvider from '@/store/ContextProvider';
import Navigation from '../components/Navigation';

export default function Layout({ children }) {
  return (
    <CartProvider>
      <Navigation />
      <main className="layout-main">{children}</main>
      <Cart />
    </CartProvider>
  );
}

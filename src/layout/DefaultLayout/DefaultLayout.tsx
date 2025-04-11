import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '@/components/Footer';
import styles from './DefaultLayout.module.css';

function DefaultLayout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.contents}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;

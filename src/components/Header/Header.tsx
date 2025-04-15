import styles from './Header.module.css';
import logo from '@/assets/common/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
      <Link to={'/'}>
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
    </header>
  );
}

export default Header;

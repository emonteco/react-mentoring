import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { User, ShoppingCart, Heart, Search } from 'lucide-react';
import { Container } from '../../components/Container';
import styles from './Header.module.scss';

export const Header = () => (
  <header>
    <div className={styles.banner}>
      <Container className={styles.banner__container}>
        <div className={clsx(styles.banner__column, styles['banner__column--left'])}>1</div>
        <div className={clsx(styles.banner__column, styles['banner__column--center'])}>2</div>
        <div className={clsx(styles.banner__column, styles['banner__column--right'])}>3</div>
      </Container>
    </div>
    <div className={styles.navbar}>
      <Container className={styles.navbar__container}>
        <div className={styles.navbar__logo}>
          <Link to="/">E-commerce</Link>
        </div>
        <nav className={styles.navbar__nav}>
          <Link to="/my-account">
            <User className={styles.navbar__nav__icon} />
          </Link>
          <Search className={styles.navbar__nav__icon} />
          <ShoppingCart className={styles.navbar__nav__icon} />
          <Heart className={styles.navbar__nav__icon} />
        </nav>
      </Container>
    </div>
  </header>
);

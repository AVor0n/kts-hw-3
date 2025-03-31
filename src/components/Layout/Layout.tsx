import { Outlet } from 'react-router';
import { Logo, NavLinks } from './components';
import styles from './Layout.module.scss';

export const Layout = () => (
  <div className={styles.container}>
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <Logo />
        <NavLinks />
      </div>
    </div>

    <div className={styles.contentWrapper}>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  </div>
);

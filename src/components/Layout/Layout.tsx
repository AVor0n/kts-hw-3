import type { PropsWithChildren } from 'react';
import { Logo, NavLinks } from './components';
import styles from './Layout.module.scss';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <Logo />
          <NavLinks />
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

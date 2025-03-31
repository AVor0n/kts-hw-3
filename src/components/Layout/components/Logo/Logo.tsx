import { LogoIcon } from 'src/components/icons';
import styles from './Logo.module.scss';
import { Colors } from 'src/styles/constants';
import { NavLink } from 'react-router';

export const Logo = () => {
  return (
    <NavLink to="/" className={styles.container}>
      <LogoIcon fill={Colors.brand} />
      <span className={styles.title}>Food Client</span>
    </NavLink>
  );
};

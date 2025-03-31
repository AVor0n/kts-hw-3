import { NavLink } from 'react-router';
import { LogoIcon } from 'src/components/icons';
import { Colors } from 'src/styles/constants';
import styles from './Logo.module.scss';

export const Logo = () => (
  <NavLink to="/" className={styles.container}>
    <LogoIcon fill={Colors.brand} />
    <span className={styles.title}>Food Client</span>
  </NavLink>
);

import { NavLink } from 'react-router';
import styles from './NavLinks.module.scss';
import clsx from 'clsx';
import { HeartIcon, UserIcon } from 'src/components/icons';
import { Colors } from 'src/styles/constants';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Recipes', to: '/recipes' },
  { label: 'Meals Categories', to: '/meals-categories' },
  { label: 'Products', to: '/products' },
  { label: 'Menu Items', to: '/menu-items' },
  { label: 'Meal Planning', to: '/meal-planning' },
];

const icons = [
  { label: 'Favorites', to: '/favorites', icon: <HeartIcon stroke={Colors.brand} /> },
  { label: 'Profile', to: '/profile', icon: <UserIcon fill={Colors.brand} /> },
];

export const NavLinks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => clsx(styles.link, isActive && styles.active)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      <div className={styles.icons}>
        {icons.map(icon => (
          <NavLink key={icon.to} className={styles.icon} to={icon.to}>
            {icon.icon}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

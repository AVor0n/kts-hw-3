import clsx from 'clsx';
import styles from './Loader.module.css';

export interface LoaderProps {
  /** Размер */
  size?: 's' | 'm' | 'l';
  /** Дополнительный класс */
  className?: string;
  color?: 'accent' | 'contrast';
}

export const Loader = ({ size = 'l', className, color = 'accent' }: LoaderProps) => (
  <div className={clsx(styles.loader, styles[size], className)}>
    <div className={clsx(styles.circle, styles[color])} />
  </div>
);

import clsx from 'clsx';
import styles from './Loader.module.css';

export type LoaderProps = {
  /** Размер */
  size?: 's' | 'm' | 'l';
  /** Дополнительный класс */
  className?: string;
  color?: 'accent' | 'contrast';
};

export const Loader: React.FC<LoaderProps> = ({ size = 'l', className, color = 'accent' }) => {
  return (
    <div className={clsx(styles.loader, styles[size], className)}>
      <div className={clsx(styles.circle, styles[color])} />
    </div>
  );
};

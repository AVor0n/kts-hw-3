import { Loader } from '../Loader';
import clsx from 'clsx';
import styles from './Button.module.css';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Состояние загрузки */
  loading?: boolean;
  /** Текст кнопки */
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ children, loading, className, disabled, onClick, ...props }) => (
  <button
    className={clsx(styles.button, className, {
      [styles.disabled]: disabled,
    })}
    onClick={loading ? undefined : onClick}
    disabled={disabled || loading}
    {...props}
  >
    {loading && <Loader size="s" color="contrast" />}
    {children}
  </button>
);

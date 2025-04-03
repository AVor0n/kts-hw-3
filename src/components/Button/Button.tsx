import clsx from 'clsx';
import { Loader } from '../Loader';
import styles from './Button.module.css';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Состояние загрузки */
  loading?: boolean;
  /** Текст кнопки */
  children: React.ReactNode;
};

export const Button = ({ children, loading, className, disabled, onClick, ...props }: ButtonProps) => (
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

import React, { useRef } from 'react';
import clsx from 'clsx';
import styles from './Input.module.css';

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> & {
  /** Значение поля */
  value: string;
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: string) => void;
  /** Слот для иконки справа */
  afterSlot?: React.ReactNode;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ value, onChange, afterSlot, className, type = 'text', ...props }, ref) => {
    const internalInputRef = useRef<HTMLInputElement>(null);
    const inputRef = ref || internalInputRef;

    const handleFocus = () => {
      if (typeof inputRef === 'function') {
        return;
      }
      inputRef.current?.focus();
    };

    return (
      <div className={clsx(styles.wrapper, className)} onClick={handleFocus} onFocus={handleFocus} tabIndex={-1}>
        <input
          className={styles.input}
          type={type}
          value={value}
          onChange={event => onChange(event.target.value)}
          {...props}
          ref={inputRef}
        />
        {afterSlot && <div className={styles.afterSlot}>{afterSlot}</div>}
      </div>
    );
  },
);

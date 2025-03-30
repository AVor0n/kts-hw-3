import * as React from 'react';
import clsx from 'clsx';
import styles from './Icon.module.css';

export type IconProps = {
  className?: string;
  color?: 'primary' | 'secondary' | 'accent' | 'tertiary';
  width?: number;
  height?: number;
};

export const Icon: React.FC<React.PropsWithChildren<IconProps>> = ({
  children,
  className,
  color = 'primary',
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    className={clsx(styles.icon, styles[color], className)}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {children}
  </svg>
);

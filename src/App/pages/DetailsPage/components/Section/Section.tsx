import { Text } from 'components';
import styles from './Section.module.scss';
import type { ReactNode } from 'react';
import clsx from 'clsx';

export interface SectionProps {
  title: string;
  level?: '1' | '2';
  children: ReactNode;
  className?: string;
}

export const Section = ({ title, children, className, level = '1' }: SectionProps) => {
  return (
    <div className={clsx(styles.container, className, styles[`level-${level}`])}>
      <Text view={level == '1' ? 'p-20' : 'p-16'} weight="bold">
        {title}
      </Text>
      <div>{children}</div>
    </div>
  );
};

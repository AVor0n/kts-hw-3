import clsx from 'clsx';
import styles from './Text.module.css';

export interface TextProps {
  /** Дополнительный класс */
  className?: string;
  /** Стиль отображения */
  view?: 'title' | 'button' | 'p-20' | 'p-18' | 'p-16' | 'p-14';
  /** Html-тег */
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p' | 'span';
  /** Начертание шрифта */
  weight?: 'normal' | 'medium' | 'bold';
  /** Контент */
  children: React.ReactNode;
  /** Цвет */
  color?: 'primary' | 'secondary' | 'accent';
  /** Максимальное кол-во строк */
  maxLines?: number;
}

export const Text: React.FC<TextProps> = ({ className, view, tag, weight, color, maxLines, children }) => {
  const Tag = tag || 'span';
  return (
    <Tag
      className={clsx(
        'text',
        view && styles[view],
        weight && styles[weight],
        color && styles[color],
        maxLines && styles[`max-lines-${maxLines}`],
        className,
      )}
    >
      {children}
    </Tag>
  );
};

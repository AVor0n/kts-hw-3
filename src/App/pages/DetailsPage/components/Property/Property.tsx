import { Text } from 'components';
import styles from './Property.module.scss';

type PropertyProps = {
  title: string;
  value: string | number;
};

export const Property = ({ title, value }: PropertyProps) => {
  return (
    <div className={styles.container}>
      <Text view="p-20" color="primary">
        {title}
      </Text>
      <Text view="p-20" color="accent" weight="bold">
        {value}
      </Text>
    </div>
  );
};

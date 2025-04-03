import { useNavigate } from 'react-router';
import { Card, Text, Button, ClockIcon } from 'components';
import { Colors } from 'styles';
import type { Dish } from 'types';
import styles from './DishCard.module.scss';

interface DishCardProps {
  dish: Dish;
}

export const DishCard = ({ dish }: DishCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      key={dish.id}
      className={styles.card}
      onClick={() => {
        navigate(`/details/${dish.id}`);
      }}
      // Чтоб не генерить уникальные картинки для каждого блюда переиспользуются 6 имеющихся
      image={`/data/${(+dish.id % 6) + 1}.jpg`}
      title={dish.name}
      subtitle={
        <Text view="p-16" color="secondary" className={styles.cardContent}>
          {dish.ingredients.join(' + ')}
        </Text>
      }
      captionSlot={
        <span className={styles.caption}>
          <ClockIcon fill={Colors.brand} />
          <Text view="p-16" color="secondary">
            {`${dish.preparationTime + dish.cookingTime} minutes`}
          </Text>
        </span>
      }
      contentSlot={
        <Text view="p-18" color="accent" weight="bold">
          {`${dish.calories} kcal`}
        </Text>
      }
      actionSlot={<Button onClick={() => {}}>Save</Button>}
    />
  );
};

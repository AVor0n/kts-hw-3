import { ArrowLeftIcon, DishIcon, Loader, Text } from 'components';
import { Navigate, useNavigate, useParams } from 'react-router';
import { Colors } from 'src/styles/constants';
import styles from './DetailsPage.module.scss';
import { useEffect } from 'react';
import { api } from 'services';
import { useState } from 'react';
import type { Dish } from 'src/types/data-contracts';
import { Property, Section } from 'src/App/pages/DetailsPage/components';

export const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dish, setDish] = useState<Dish | null>(null);

  useEffect(() => {
    if (id) {
      api.getPlate(id).then(d => {
        console.log(d);
        setDish(d);
      });
    }
  }, [id]);

  if (!id) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={() => navigate(-1)} className={styles.backLink}>
          <ArrowLeftIcon stroke={Colors.brand} />
          <Text view="title">{dish ? dish.name : 'Back'}</Text>
        </button>

        {!dish ? (
          <div className={styles.loaderWrapper}>
            <Loader />
          </div>
        ) : (
          <div className={styles.content}>
            <div className={styles.columns}>
              <img className={styles.image} src={`/data/${(+dish.id % 6) + 1}.jpg`} alt={dish?.name} />
              <div className={styles.info}>
                <Property title="Preparation" value={dish.preparationTime} />
                <Property title="Cooking" value={dish.cookingTime} />
                <Property title="Total" value={dish.preparationTime + dish.cookingTime} />
                <Property title="Likes" value={dish.likes} />
                <Property title="Servings" value={dish.servings} />
                <Property title="Rating" value={`${dish.rating} / 5`} />
              </div>
            </div>
            <div className={styles.description}>
              <Text view="p-20">{dish?.description}</Text>
            </div>

            <Section title="Ingredients">
              <div className={styles.ingredients}>
                {dish?.ingredients.map(ingredient => (
                  <div className={styles.ingredient}>
                    <DishIcon fill={Colors.brand} />
                    <Text view="p-16">{ingredient}</Text>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Directions">
              <div className={styles.directions}>
                {dish?.directions.map((direction, idx) => (
                  <Section title={`Step ${idx + 1}`} level="2" className={styles.step}>
                    <Text view="p-16">{direction}</Text>
                  </Section>
                ))}
              </div>
            </Section>
          </div>
        )}
      </div>
    </div>
  );
};

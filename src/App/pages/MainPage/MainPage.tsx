import { useEffect, useState } from 'react';
import { Button, Input, MultiDropdown, Text, SearchIcon, Loader } from 'components';
import { api } from 'services';
import { Colors } from 'styles';
import type { Dish } from 'types';
import { DishCard, HeroBlock } from './components';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [dishes, setDishes] = useState<Dish[]>([]);

  useEffect(() => {
    setIsLoading(true);
    api
      .getPlates()
      .then(setDishes)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={styles.container}>
      <HeroBlock />

      <div className={styles.description}>
        <Text view="p-20">
          Find the perfect food and drink ideas for every occasion, from weeknight dinners to holiday feasts.
        </Text>
      </div>

      <div className={styles.search}>
        <div className={styles.searchInputWrapper}>
          <Input value={search} onChange={setSearch} placeholder="Enter dishes" />
        </div>
        <Button>
          <SearchIcon fill={Colors.white} />
        </Button>
      </div>

      <div className={styles.filters}>
        <MultiDropdown
          onChange={() => {}}
          options={[
            {
              key: 'deserts',
              value: 'Deserts',
            },
            {
              key: 'drinks',
              value: 'Drinks',
            },
          ]}
          value={[]}
          getTitle={() => 'Categories'}
        />
      </div>

      <div className={styles.grid}>
        {isLoading ? (
          <div className={styles.loaderWrapper}>
            <Loader />
          </div>
        ) : (
          dishes.map(dish => <DishCard dish={dish} key={dish.id} />)
        )}
      </div>
    </div>
  );
};

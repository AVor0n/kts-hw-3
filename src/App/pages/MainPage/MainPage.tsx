import { Button, Card, Input, MultiDropdown, Text, SearchIcon, ClockIcon } from 'components';
import { HeroBlock } from './components';
import { useState } from 'react';
import { Colors } from 'src/styles/constants';
import styles from './MainPage.module.scss';

const items = [
  {
    id: 1,
    image: '/data/1.jpg',
    title: 'Title',
    calories: 100,
    cookingTime: 10,
    ingredients: ['ingredient1', 'ingredient2', 'ingredient3'],
  },
  {
    id: 2,
    image: '/data/2.jpg',
    title: 'Title',
    calories: 100,
    cookingTime: 10,
    ingredients: ['ingredient1', 'ingredient2', 'ingredient3'],
  },
  {
    id: 3,
    image: '/data/3.jpg',
    title: 'Title',
    calories: 100,
    cookingTime: 10,
    ingredients: ['ingredient1', 'ingredient2', 'ingredient3'],
  },
  {
    id: 4,
    image: '/data/4.jpg',
    title: 'Title',
    calories: 100,
    cookingTime: 10,
    ingredients: ['ingredient1', 'ingredient2', 'ingredient3'],
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/150',
    title: 'Title',
    calories: 100,
    cookingTime: 10,
    ingredients: ['ingredient1', 'ingredient2', 'ingredient3'],
  },
];

export const MainPage = () => {
  const [search, setSearch] = useState('');
  console.log(123);
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
        {items.map(item => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            subtitle={
              <Text view="p-16" color="secondary" className={styles.cardContent}>
                {item.ingredients.join(' + ')}
              </Text>
            }
            captionSlot={
              <div className={styles.caption}>
                <ClockIcon fill={Colors.brand} />
                <Text view="p-16" color="secondary">
                  {`${item.cookingTime} minutes`}
                </Text>
              </div>
            }
            contentSlot={
              <Text view="p-18" color="accent" weight="bold">
                {`${item.calories} kcal`}
              </Text>
            }
            actionSlot={<Button onClick={() => {}}>Save</Button>}
          />
        ))}
      </div>
    </div>
  );
};

import { Button } from '../Button';
import { Card, type CardProps } from './Card';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    className: {
      control: 'text',
    },
    image: {
      defaultValue: '/picture.svg',
      control: 'text',
    },
    captionSlot: {
      mapping: {
        undefined,
      },
      control: 'text',
    },
    title: {
      mapping: {
        undefined,
      },
      control: 'text',
      defaultValue: 'Заголовок карточки в несколько строк Заголовок карточки в несколько строк',
    },
    subtitle: {
      mapping: {
        undefined,
      },
      control: 'text',
      defaultValue:
        'Описание карточки Описание карточки Описание карточкиОписание карточкиОписание карточки Описание карточки',
    },
    contentSlot: {
      mapping: {
        undefined,
      },
      control: 'text',
    },
  },
};

export const Default = (props: CardProps) => <Card {...props} actionSlot={<Button>В корзину</Button>} />;

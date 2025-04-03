import { Button, type ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    className: {
      control: 'text',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      mapping: {
        true: true,
        false: false,
        undefined,
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
      mapping: {
        true: true,
        false: false,
        undefined,
      },
    },
    children: {
      type: { name: 'string', required: false },
      defaultValue: 'Send',
    },
  },
};

export const Default = (props: ButtonProps) => <Button {...props} />;

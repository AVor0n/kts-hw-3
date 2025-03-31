import { ArrowDownIcon } from '../icons';
import { Input, type InputProps } from './Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    className: {
      control: 'text',
    },
    value: {
      control: 'text',
      mapping: {
        undefined,
      },
    },
    placeholder: {
      control: 'text',
      mapping: {
        undefined,
      },
    },
    disabled: {
      mapping: {
        true: true,
        false: false,
        undefined,
      },
      control: 'boolean',
    },
  },
};

export const Default = (props: InputProps) => (
  <Input {...props} onChange={() => {}} afterSlot={<ArrowDownIcon color="secondary" />} />
);

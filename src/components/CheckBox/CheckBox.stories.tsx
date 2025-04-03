import { useState } from 'react';
import { CheckBox, type CheckBoxProps } from './CheckBox';

export default {
  title: 'CheckBox',
  component: CheckBox,
  argTypes: {
    className: {
      control: 'text',
    },
    disabled: {
      mapping: {
        true: true,
        false: false,
        undefined,
      },
      control: 'boolean',
    },
    checked: {
      mapping: {
        true: true,
        false: false,
        undefined,
      },
      control: 'boolean',
    },
  },
};

export const Default = ({ checked, ...props }: CheckBoxProps) => {
  const [value, setValue] = useState<boolean | undefined>(checked);
  return <CheckBox {...props} checked={value} onChange={setValue} />;
};

import { Icon } from '@iconify/react';
import { ChangeEvent, ReactNode } from 'react';

interface Props {
  isChecked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
  value: string;
}

function Checkbox({ children, onChange, isChecked, value }: Props) {
  return (
    <>
      <input
        id={value}
        type="checkbox"
        className="hidden"
        value={value}
        onChange={onChange}
        checked={isChecked}
      />
      <label htmlFor={value} className="flex items-center space-x-3">
        <Icon
          icon={`carbon:checkbox${isChecked ? '-checked' : ''}`}
          className="cursor-pointer text-2xl"
        />
        {children}
      </label>
    </>
  );
}

export default Checkbox;

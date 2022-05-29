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
    <div className="relative flex items-center space-x-3">
      <input
        type="checkbox"
        className="absolute top-0 left-0 h-full w-full opacity-0"
        value={value}
        onChange={onChange}
        checked={isChecked}
      />
      <Icon
        icon={`carbon:checkbox${isChecked ? '-checked' : ''}`}
        className="cursor-pointer text-2xl"
      />
      {children}
    </div>
  );
}

export default Checkbox;

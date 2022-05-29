import { Icon } from '@iconify/react';
import { Menu } from '@headlessui/react';

function CartDropdownItem() {
  return (
    <Menu.Item as="div" className="border-b-2 border-gray-lightest py-5">
      <div className="mb-4 flex justify-end text-lg">
        <Icon icon="emojione-monotone:heavy-multiplication-x" className="cursor-pointer" />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-bold">Samurai King Resting</span>
          <span className="text-xl text-gray">$10000.00</span>
        </div>
        <div className="h-full">
          <img
            className="h-auto w-28"
            src="https://images.pexels.com/photos/11582120/pexels-photo-11582120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Puerta de color roja"
          />
        </div>
      </div>
    </Menu.Item>
  );
}

export default CartDropdownItem;

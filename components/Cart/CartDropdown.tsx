import { Icon } from '@iconify/react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import CartDropdownItem from './CartDropdownItem';

function CartDropdown() {
  return (
    <Menu>
      <Menu.Button className="relative">
        <Icon icon="ant-design:shopping-cart-outlined" className="text-4xl" />
        {/*Number of items badge*/}
        <div className="text absolute bottom-0 right-0 flex h-6 w-6 translate-x-3 translate-y-3 transform items-center justify-center bg-black font-bold text-white">
          <span>2</span>
        </div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute top-20 right-4 z-10 ml-10 max-h-[50vh] w-full max-w-sm overflow-y-auto border-4 border-gray-lightest bg-white px-5 sm:right-0">
          <CartDropdownItem />
          <CartDropdownItem />
          <CartDropdownItem />
          <CartDropdownItem />
          <CartDropdownItem />

          <button className="my-5 w-full border-3 border-black py-3 text-center uppercase">
            Clear
          </button>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default CartDropdown;

import { Icon } from '@iconify/react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect } from 'react';
import CartDropdownItem from './CartDropdownItem';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppStore';
import { emptyCart, getCartFromLocalStorage } from '../../store/cartSlice';

function CartDropdown() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cart.artworks);
  useEffect(() => {
    dispatch(getCartFromLocalStorage());
  }, [dispatch]);
  const handleClearCart = () => {
    const cartDropdownButton = document.querySelector<HTMLButtonElement>(
      '[id^="headlessui-menu-button"]'
    );
    cartDropdownButton?.click();
    dispatch(emptyCart());
  };

  return (
    <Menu>
      <Menu.Button className="relative">
        <Icon icon="ant-design:shopping-cart-outlined" className="text-4xl" />
        {/*Number of items badge*/}
        {cart.length > 0 && (
          <div className="text absolute bottom-0 right-0 flex h-6 w-6 translate-x-3 translate-y-3 transform items-center justify-center bg-black font-bold text-white">
            <span>{cart.length}</span>
          </div>
        )}
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
        <Menu.Items className="absolute top-20 right-4 z-20 ml-10 max-h-[50vh] w-full max-w-sm overflow-y-auto border-4 border-gray-lightest bg-white px-5 sm:right-0">
          {cart.length > 0 ? (
            [...cart]
              .reverse()
              .map(artwork => <CartDropdownItem key={artwork.id} artwork={artwork} />)
          ) : (
            <div className="text-gray-500 mt-5 text-center">
              <p>Your cart is empty</p>
            </div>
          )}

          <div className="sticky bottom-0 border-t border-gray-lightest bg-white">
            <button
              className="my-5 w-full border-3 border-black py-3 text-center uppercase"
              onClick={handleClearCart}
            >
              Clear
            </button>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default CartDropdown;

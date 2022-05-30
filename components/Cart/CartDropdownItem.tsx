import Image from 'next/image';
import { Icon } from '@iconify/react';
import { Menu } from '@headlessui/react';
import { Artwork } from '../../models/Artwork';
import { removeFromCart } from '../../store/cartSlice';
import { useAppDispatch } from '../../hooks/useAppStore';

interface Props {
  artwork: Artwork;
}

function CartDropdownItem({ artwork }: Props) {
  const dispatch = useAppDispatch();
  const {
    name,
    price,
    details: {
      src: { landscape },
    },
  } = artwork;

  return (
    <Menu.Item as="div" className="border-b-2 border-gray-lightest py-5">
      <div
        className="mb-4 flex justify-end text-lg"
        onClick={() => dispatch(removeFromCart(artwork))}
      >
        <Icon icon="emojione-monotone:heavy-multiplication-x" className="cursor-pointer" />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex w-3/4 flex-col pr-4">
          <span className="font-bold line-clamp-2">{name}</span>
          <span className="text-xl text-gray">${price}</span>
        </div>
        <Image className="object-cover" width={150} height={100} src={landscape} alt={name} />
      </div>
    </Menu.Item>
  );
}

export default CartDropdownItem;

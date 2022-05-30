import { Artwork } from '../../models/Artwork';
import { addToCart } from '../../store/cartSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppStore';

interface Props {
  artwork: Artwork;
  className?: string;
}

function AddToCartButton({ artwork, className }: Props) {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cart.artworks);

  const handleClick = () => {
    const cartDropdownButton = document.querySelector<HTMLButtonElement>(
      '[id^="headlessui-menu-button"]'
    );
    cartDropdownButton?.click();
    dispatch(addToCart(artwork));
  };

  return (
    <button className={className} onClick={() => handleClick()}>
      {cart.find(item => item.id === artwork.id) ? 'Added ✅' : 'Add to cart'}
    </button>
  );
}

export default AddToCartButton;

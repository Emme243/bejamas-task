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

  return (
    <button className={className} onClick={() => dispatch(addToCart(artwork))}>
      {cart.find(item => item.id === artwork.id) ? 'Added ✅' : 'Add to cart'}
    </button>
  );
}

export default AddToCartButton;

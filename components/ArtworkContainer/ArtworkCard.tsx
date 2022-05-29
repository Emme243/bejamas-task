import { Artwork } from '../../models/Artwork';
import Image from 'next/image';

function ArtworkCard({ artwork }: { artwork: Artwork }) {
  const {
    category,
    details: {
      src: { portrait },
    },
    price,
    name,
  } = artwork;

  return (
    <div className="flex w-full flex-col">
      <div className="group relative mb-2">
        <Image
          src={portrait}
          alt={name}
          layout="responsive"
          height={400}
          width={320}
          className="z-0 object-cover"
        />
        <button className="absolute bottom-0 left-0 hidden h-12 w-full bg-black text-lg font-semibold uppercase text-white group-hover:block">
          Add to cart
        </button>
      </div>
      <span className="text-lg font-bold capitalize text-gray">{category}</span>
      <span className="text-2xl font-bold"> {name}</span>
      <span className="text-xl text-gray">${price}</span>
    </div>
  );
}

export default ArtworkCard;

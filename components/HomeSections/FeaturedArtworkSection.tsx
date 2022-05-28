import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { Artwork } from '../../models/Artwork';
import FEATURED_ARTWORK_QUERY from '../../graphql/queries/featuredArtworkQuery';
import FeaturedArtworkLoader from '../Loaders/FeaturedArtworkLoader';

function FeaturedArtworkSection() {
  const { data, loading, error } = useQuery(FEATURED_ARTWORK_QUERY);

  if (loading) return <FeaturedArtworkLoader />;
  if (error) return <p>Oh no... {error.message}</p>;

  const {
    category,
    description,
    name,
    details: {
      width,
      height,
      size,
      src: { landscape },
      recommendations,
    },
  } = data.featuredArtwork as Artwork;

  return (
    <>
      <div className="space-y-5">
        <span className="text-2xl font-bold">{name}</span>
        <div className="relative">
          <Image
            src={landscape}
            alt={name}
            width={1200}
            height={600}
            layout="responsive"
            priority
          />
          <div className="absolute bottom-0 left-0 flex h-12 w-48 items-center justify-center bg-white">
            <span className="text-lg font-bold">Photo of the day</span>
          </div>
        </div>
        <button className="h-12 w-full bg-black text-lg font-semibold uppercase text-white">
          Add to cart
        </button>
      </div>
      <div className="mt-5 space-y-5">
        <div className="space-y-3">
          <h2 className="text-xl font-bold">About the {name}</h2>
          <h3 className="text-xl font-bold capitalize text-gray">{category}</h3>
          {description.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="space-y-3 text-xl">
          <h2 className="font-bold">People also buy</h2>
          <div className="grid grid-cols-3 gap-x-4">
            {recommendations.map(recommendation => (
              <Image
                key={recommendation.name}
                src={recommendation.src.portrait}
                alt={recommendation.name}
                width={400}
                height={600}
              />
            ))}
          </div>
          <div>
            <h2 className="mb-1 font-bold">Details</h2>
            <p className="text-gray">
              Size: {width} x {height} pixels
            </p>
            <p className="text-gray">Size: {Math.round(size / 1000)} MB</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedArtworkSection;

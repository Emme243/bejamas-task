import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Artwork } from '../../models/Artwork';
import FEATURED_ARTWORK_QUERY from '../../graphql/queries/featuredArtworkQuery';
import FeaturedArtworkLoader from '../Loaders/FeaturedArtworkLoader';
import useTailwindBreakpoints from '../../hooks/useTailwindBreakpoints';
import { useAppDispatch } from '../../hooks/useAppStore';
import { addToCart } from '../../store/cartSlice';
import AddToCartButton from '../Cart/AddToCartButton';

function FeaturedArtworkSection() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useQuery(FEATURED_ARTWORK_QUERY);

  const { isScreenLarge } = useTailwindBreakpoints();
  const [imageCoverHeight, setImageCoverHeight] = useState(600);
  useEffect(() => {
    setImageCoverHeight(isScreenLarge ? 400 : 600);
  }, [isScreenLarge]);

  if (loading) return <FeaturedArtworkLoader />;
  if (error) return <p>Oh no... {error.message}</p>;

  const featuredArtwork = data.featuredArtwork as Artwork;
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
  } = featuredArtwork;

  return (
    <>
      {/*BIG ARTWORK*/}
      <div className="space-y-5 lg:grid lg:grid-cols-featured-artwork lg:grid-rows-featured-artwork lg:items-center lg:gap-y-5 lg:gap-x-4 lg:space-y-0 lg:grid-areas-featured-artwork">
        <span className="text-2xl font-bold lg:grid-in-name">{name}</span>
        <div className="relative lg:grid-in-image">
          <Image
            alt={name}
            className="object-cover"
            height={imageCoverHeight}
            layout="responsive"
            priority
            src={landscape}
            width={1200}
          />
          <div className="absolute bottom-0 left-0 flex h-12 w-48 items-center justify-center bg-white md:h-16 md:w-52 xl:h-20 xl:w-72">
            <span className="text-lg font-bold md:text-xl xl:text-2xl">Photo of the day</span>
          </div>
        </div>

        <AddToCartButton
          className="h-12 w-full bg-black text-lg font-semibold uppercase text-white lg:w-64 lg:place-self-end lg:grid-in-button"
          artwork={featuredArtwork}
        />
      </div>
      {/*ARTWORK DESCRIPTION AND RECOMMENDED ARTWORKS*/}
      <div className="mt-5 space-y-5 lg:mt-9 lg:flex lg:space-x-16 lg:space-y-0">
        <div className="space-y-3">
          <h2 className="text-xl font-bold">About the {name}</h2>
          <h3 className="text-xl font-bold capitalize text-gray">{category}</h3>
          {description.split('\n').map((paragraph, index) => (
            <p className="text-gray xl:w-4/5 xl:text-lg" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className="space-y-3 text-xl lg:space-y-5 lg:text-right">
          <h2 className="font-bold">People also buy</h2>
          <div className="grid grid-cols-3 gap-x-4 xl:gap-x-8">
            {recommendations.map(recommendation => (
              <Image
                alt={recommendation.name}
                className="object-cover"
                height={600}
                key={recommendation.name}
                src={recommendation.src.portrait}
                width={400}
              />
            ))}
          </div>
          <div>
            <h2 className="mb-1 font-bold">Details</h2>
            <p className="text-gray lg:text-base">
              Size: {width} x {height} pixels
            </p>
            <p className="text-gray lg:text-base">Size: {Math.round(size / 1000)} MB</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedArtworkSection;

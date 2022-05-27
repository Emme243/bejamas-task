import Navbar from '../components/Navbar';
import FeaturedArtworkSection from '../components/HomeSections/FeaturedArtworkSection';
import { Artwork } from '../models/Artwork';
import { fetchFeaturedArtwork } from '../api/artworkApi';

interface Props {
  featuredArtwork: Artwork;
}

const Home = ({ featuredArtwork }: Props) => {
  return (
    <>
      <Navbar />
      <div className="container">
        <FeaturedArtworkSection featuredArtwork={featuredArtwork} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const featuredArtwork = await fetchFeaturedArtwork();

  return {
    props: { featuredArtwork },
  };
}

export default Home;

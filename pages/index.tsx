import Navbar from '../components/Navbar';
import FeaturedArtworkSection from '../components/HomeSections/FeaturedArtworkSection';
import { Artwork } from '../models/Artwork';

interface Props {
  featuredArtwork: Artwork;
}

const Home = () => {
  return (
    <div className="my-container">
      <Navbar />
      <FeaturedArtworkSection />
    </div>
  );
};

export default Home;

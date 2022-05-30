import Navbar from '../components/Ui/Navbar';
import FeaturedArtworkSection from '../components/HomeSections/FeaturedArtworkSection';
import ArtworkSection from '../components/HomeSections/ArtworkSection';

const Home = () => {
  return (
    <div className="my-container mb-7">
      <Navbar className="sticky top-0 z-30" />
      <div className="mt-4">
        <FeaturedArtworkSection />
      </div>
      <hr className="mt-8 mb-5 h-1 border-0 bg-gray-lightest" />
      <ArtworkSection />
    </div>
  );
};

export default Home;

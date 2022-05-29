import Navbar from '../components/Ui/Navbar';
import FeaturedArtworkSection from '../components/HomeSections/FeaturedArtworkSection';
import ArtworkSection from '../components/HomeSections/ArtworkSection';

const Home = () => {
  return (
    <div className="my-container">
      <Navbar />
      <div className="mt-4">
        <FeaturedArtworkSection />
      </div>
      <hr className="my-8 h-1 border-0 bg-gray-lightest" />
      <ArtworkSection />
    </div>
  );
};

export default Home;

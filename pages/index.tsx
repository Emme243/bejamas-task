import Navbar from '../components/Navbar';
import FeaturedArtworkSection from '../components/HomeSections/FeaturedArtworkSection';

const Home = () => {
  return (
    <div className="my-container">
      <Navbar />
      <div className="mt-4">
        <FeaturedArtworkSection />
      </div>
      <hr className="my-8 h-1 border-0 bg-gray-lightest" />
    </div>
  );
};

export default Home;

import { Artwork } from '../../models/Artwork';
import { useQuery } from '@apollo/client';
import FEATURED_ARTWORK_QUERY from '../../graphql/queries/featuredArtworkQuery';

function FeaturedArtworkSection() {
  const { data, loading, error } = useQuery(FEATURED_ARTWORK_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  const featuredArtwork = data.featuredArtwork as Artwork;
  return (
    <>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eos fugiat ipsa laudantium,
      nostrum numquam obcaecati porro quae quas quo recusandae saepe tempore velit! Asperiores
      dolores ipsam modi quaerat. Odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Beatae dignissimos ipsa molestias qui. A ab ad adipisci, at consequuntur deleniti dolor eum
      exercitationem, expedita, itaque libero minima officia pariatur perferendis quas recusandae
      rerum vel. Accusamus asperiores blanditiis consequuntur dolorem doloremque dolores eos eum
      harum, id illo incidunt ipsam mollitia natus nulla obcaecati officia optio provident quasi rem
      sapiente soluta temporibus tenetur, ut vero, voluptatum? Accusantium aliquid aperiam at aut
      blanditiis deleniti dolores doloribus fugiat fugit laudantium libero natus nulla perferendis
      placeat quaerat quasi quia quisquam quo quod quos ratione repellat, repellendus rerum sapiente
      totam ut voluptates voluptatibus. Ad, asperiores illo illum modi mollitia numquam quae quaerat
      vel. Dolorum facere nihil odio quisquam voluptates. Accusamus aliquid autem consequatur
      consequuntur cum, dolore doloribus eaque earum eius error esse et excepturi illo illum labore
      libero magnam maxime modi necessitatibus nisi porro quae quaerat quasi quidem quo rem repellat
      sed sequi sint tempore ullam unde vel voluptas? Blanditiis cupiditate debitis deserunt dicta
      minima omnis provident reprehenderit voluptas. Asperiores itaque, laboriosam. Eaque, rem
      tenetur? Eligendi, facere, obcaecati. Eveniet fugit illum maiores? Architecto autem,
      consequatur dolor doloremque ducimus esse eum exercitationem id illo ipsam, laudantium, nulla
      quos reiciendis sed temporibus vero voluptate! At consequuntur debitis doloremque esse labore
      nam perferendis porro possimus, quia repellendus tempore vitae voluptates? A animi aperiam,
      architecto asperiores cum, deserunt eaque iure necessitatibus odio pariatur perspiciatis
      provident qui voluptatum. Eius harum, quas!
    </>
  );
}

export default FeaturedArtworkSection;

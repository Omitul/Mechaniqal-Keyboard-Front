import Advertisement from "../../components/advertisement/Advertisement";
import CustomerReview from "../../components/customerReview/CustomerReview";
import Hero from "../../components/hero/Hero";
import FeaturedProduct from "../featured/FeaturedProducts";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Advertisement></Advertisement>
      <FeaturedProduct></FeaturedProduct>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;

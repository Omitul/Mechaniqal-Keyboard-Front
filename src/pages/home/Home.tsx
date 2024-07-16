import CustomerReview from "../../components/customerReview/CustomerReview";
import Hero from "../../components/hero/Hero";
import FeaturedProduct from "../featured/FeaturedProducts";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <FeaturedProduct></FeaturedProduct>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;

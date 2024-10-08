import Advertisement from "../../components/advertisement/Advertisement";
import CustomerReview from "../../components/customerReview/CustomerReview";
import UseOrdercount from "../../components/extrasections/usercount/UseOrdercount";
import WhyChooseMechaniqal from "../../components/extrasections/whychoose/WhyChooseMechaniqal";
import Hero from "../../components/hero/Hero";
import TopBrands from "../../components/topbrands/TopBrands";
import FeaturedProduct from "../featured/FeaturedProducts";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Advertisement></Advertisement>
      <FeaturedProduct></FeaturedProduct>
      <TopBrands></TopBrands>
      <CustomerReview></CustomerReview>
      <WhyChooseMechaniqal></WhyChooseMechaniqal>
      <UseOrdercount></UseOrdercount>
    </div>
  );
};

export default Home;

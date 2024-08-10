import { Link } from "react-router-dom";
import FeaturedProdDetails from "./FeaturedProdDetails";
import { useGetProductQuery } from "../../redux/features/products/ProductApi";
import { Product } from "../../types";

const FeaturedProduct: React.FC = () => {
  const { data, isLoading } = useGetProductQuery({ sort: { _id: -1 } }); // latest products er jnno sort
  if (isLoading) {
    <p>Loading...</p>;
  }

  const tdata = data;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
        {tdata &&
          tdata.data
            .slice(0, 6)
            .map((prod: Product) => (
              <FeaturedProdDetails
                key={prod._id}
                prod={prod}
              ></FeaturedProdDetails>
            ))}
      </div>
      <div className="flex items-center justify-center mb-3">
        <Link to="/products" className="btn btn-primary">
          See More
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProduct;

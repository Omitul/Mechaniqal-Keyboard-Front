import { Link } from "react-router-dom";
import FeaturedProdDetails from "./FeaturedProdDetails";
import { useGetProductQuery } from "../../redux/features/products/ProductApi";

const FeaturedProduct: React.FC = () => {
  const { data, isLoading } = useGetProductQuery({});
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
            .map((prod) => (
              <FeaturedProdDetails
                key={prod.id}
                prod={prod}
              ></FeaturedProdDetails>
            ))}
      </div>
      <div className="flex items-center justify-center mb-3">
        <Link to="/products" className="btn btn-primary">
          See Details
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProduct;

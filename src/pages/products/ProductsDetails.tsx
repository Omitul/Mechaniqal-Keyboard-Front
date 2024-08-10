import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { Product } from "../../types";

type ProductsDetailsProps = {
  prod: Product;
};

const ProductsDetails: React.FC<ProductsDetailsProps> = ({ prod }) => {
  const { image, name, brand, available_quantity, price, rating } = prod;

  const numericRating = Number(rating) || 0;
  const navigate = useNavigate();
  const handleSeeDetails = () => {
    navigate("/product-details", { state: prod });
  };

  return (
    <div className="p-4 md:p-6">
      <div className="card bg-base-100 shadow-xl flex flex-col md:flex-row">
        <figure className="w-full md:w-1/2">
          <img
            src={image}
            alt={name}
            className="w-full h-64 md:h-96 object-cover"
          />
        </figure>
        <div className="card-body p-4 md:p-6">
          <h2 className="card-title text-2xl md:text-4xl mb-4">{name}</h2>
          <p className="text-gray-700 text-lg md:text-2xl mb-2 font-bold">
            {brand}
          </p>
          <p className="text-lg md:text-2xl mb-2">
            <span className="text-gray-600">Available Quantity: </span>
            {available_quantity}
          </p>
          <p className="text-lg md:text-2xl mb-2">
            <span className="text-gray-600">Price: </span>
            {price} BDT
          </p>
          <p className="text-lg md:text-2xl mb-4">
            <span className="text-gray-600">Rating: </span>
            <StarRatings
              rating={numericRating}
              starRatedColor="gold"
              numberOfStars={5}
              name="rating"
              starDimension="20px"
              starSpacing="3px"
            />
          </p>
          <div className="card-actions flex justify-end">
            <button
              onClick={handleSeeDetails}
              className="btn btn-primary px-4 py-2 text-lg md:text-xl"
            >
              Show Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;

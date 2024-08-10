import StarRatings from "react-star-ratings";
import { Product } from "../../types";
type ProductsDetailsProps = {
  prod: Product;
};
const FeaturedProdDetails: React.FC<ProductsDetailsProps> = ({ prod }) => {
  console.log("prod", prod);
  const { image, name, brand, available_quantity, price, rating } = prod;
  const numericRating = Number(rating) || 0;

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <div className="flex-1 flex flex-col md:flex-row justify-center items-center">
          <figure>
            <img
              src={image}
              alt="Movie"
              className="w-[500px] h-96 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-4xl mb-6">{name}</h2>
            <p className="text-gray-700  text-2xl mb-2 font-bold">{brand}</p>
            <p className="text-2xl mb-3">
              <span className="text-gray-600  text-2xl">
                Available Quantity:{" "}
              </span>
              {available_quantity}
            </p>
            <p className="text-2xl mb-3">
              <span className="text-gray-600  text-2xl">Price: </span>
              {price} BDT
            </p>
            <p className="text-2xl mb-3">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProdDetails;

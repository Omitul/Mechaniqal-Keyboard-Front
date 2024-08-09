import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/features/cart/CartSlice";
import StarRatings from "react-star-ratings";

const ProductDetailCard = () => {
  const location = useLocation();
  const prod = location.state;
  const { name, price, brand, image, available_quantity, rating, description } =
    prod;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    handleSeeDetails();
    dispatch(addToCart(prod));
  };

  const navigate = useNavigate();
  const numericRating = Number(rating) || 0;
  const handleSeeDetails = () => {
    navigate("/cart", { state: prod });
  };

  return (
    /// ashole ekhane id dhore oi product db theke fetch kore then details show kora lagbe, but lets try for a json data first,as backend is not ready

    <div>
      <div className="border border-gray-300 rounded-lg shadow-xl p-6 bg-green-300">
        <div className="card card-side bg-base-100 shadow-xl p-32 max-w-max  mx-auto gap-x-7 flex-1">
          <figure>
            <img
              src={image}
              className="h-full w-full object-cover"
              alt="Movie"
            />
          </figure>
          <div className="">
            <h2 className="text-6xl mb-4">{name}</h2>
            <p className="mb-4 text-2xl">
              <span className="font-semibold">Brand:</span> {brand}
            </p>
            <p className="mb-4 text-2xl">
              <span className="font-semibold">Available Quantity:</span>{" "}
              {available_quantity}
            </p>
            <p className="mb-4 text-2xl">
              <span className="font-semibold">Price: </span>
              {price}
            </p>
            <p className="mb-4 text-2xl">
              <span className="font-semibold ">Description: </span>
              <span className="text-gray-600 text-md">{description}</span>
            </p>
            <p className="mb-4 text-2xl">
              <StarRatings
                rating={numericRating} // Pass the rating from the product
                starRatedColor="gold"
                numberOfStars={5}
                name="rating"
                starDimension="30px"
                starSpacing="5px"
              />
            </p>

            <div className="mt-20">
              <Link
                onClick={handleAddToCart}
                to="/cart"
                className="btn btn-primary"
              >
                Add To Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;

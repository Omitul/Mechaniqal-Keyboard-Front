import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/features/cart/CartSlice";
import StarRatings from "react-star-ratings";
import Swal from "sweetalert2";

const ProductDetailCard = () => {
  const location = useLocation();
  const prod = location.state;
  const { name, price, brand, image, available_quantity, rating, description } =
    prod;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const numericRating = Number(rating) || 0;

  const handleAddToCart = () => {
    if (available_quantity <= 0) {
      console.log("hmm asche");
      Swal.fire({
        icon: "error",
        title: "Out of Stock",
        text: "Sorry, this product is currently out of stock.",
      });
    } else {
      handleSeeDetails();
      dispatch(addToCart(prod));
    }
  };

  const handleSeeDetails = () => {
    navigate("/cart", { state: prod });
  };

  return (
    ///mb-8 to set margin
    <div className="mb-8 p-12 md:p-6 lg:p-8">
      <div className="border border-gray-300 rounded-lg shadow-xl bg-green-300">
        <div className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row p-4 md:p-8 lg:p-12">
          <figure className="w-full md:w-1/2">
            <img
              src={image}
              className="w-full h-auto md:h-96 object-cover"
              alt={name}
            />
          </figure>
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-4xl lg:text-6xl mb-4">{name}</h2>
            <p className="mb-2 text-xl md:text-2xl">
              <span className="font-semibold">Brand:</span> {brand}
            </p>
            <p className="mb-2 text-xl md:text-2xl">
              <span className="font-semibold">Available Quantity:</span>{" "}
              {available_quantity}
            </p>
            <p className="mb-2 text-xl md:text-2xl">
              <span className="font-semibold">Price:</span> {price}
            </p>
            <p className="mb-2 text-xl md:text-2xl">
              <span className="font-semibold">Description: </span>
              <span className="text-gray-600 text-sm md:text-base">
                {description}
              </span>
            </p>
            <p className="mb-4 text-xl md:text-2xl">
              <StarRatings
                rating={numericRating}
                starRatedColor="gold"
                numberOfStars={5}
                name="rating"
                starDimension="20px"
                starSpacing="3px"
              />
            </p>

            <div className="mt-4 md:mt-8">
              {available_quantity > 0 ? (
                <Link
                  onClick={handleAddToCart}
                  to="/cart"
                  className="btn btn-primary"
                >
                  Add To Cart
                </Link>
              ) : (
                <button className="btn btn-primary" disabled>
                  Out of Stock
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;

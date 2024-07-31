import { useNavigate } from "react-router-dom";

const ProductsDetails = ({ prod }) => {
  const { image, name, brand, available_quantity, price, rating } = prod;
  const navigate = useNavigate();

  const handleSeeDetails = () => {
    navigate("/product-details", { state: prod });
  };
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <div className="flex-1 flex flex-row justify-center items-center">
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
              <span className="text-gray-600  text-2xl">Rating: </span>
              {rating}
            </p>

            <div className="card-actions justify-end">
              <button onClick={handleSeeDetails} className="btn btn-primary">
                See Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;

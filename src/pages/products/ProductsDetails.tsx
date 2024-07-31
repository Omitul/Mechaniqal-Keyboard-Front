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
        <figure>
          <img src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{brand}</p>
          <p>{available_quantity}.</p>
          <p>{price}</p>
          <p>{rating}</p>

          <div className="card-actions justify-end">
            <button onClick={handleSeeDetails} className="btn btn-primary">
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;

import { Link } from "react-router-dom";

const ProductsDetails = ({ prod }) => {
  const { image, title, brand, available_quantity, price, rating } = prod;

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{brand}</p>
          <p>{available_quantity}.</p>
          <p>{price}</p>
          <p>{rating}</p>

          <div className="card-actions justify-end">
            <Link to="/product-details" className="btn btn-primary">
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;

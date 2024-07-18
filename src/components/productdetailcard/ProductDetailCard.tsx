import { Link } from "react-router-dom";

const ProductDetailCard = () => {
  const pdata = {
    image:
      "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
    title: "Sample Movie Title",
    brand: "Brand Name",
    available_quantity: 10,
    price: "$19.99",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget augue nec urna aliquam tristique. Integer sit amet lectus in risus cursus bibendum. Quisque mattis vel risus eget aliquam.",
  };
  return (
    /// ashole ekhane id dhore oi product db theke fetch kore then details show kora lagbe, but lets try for a json data first,as backend is not ready

    <div>
      <div className="border border-gray-300 rounded-lg shadow-xl p-6 bg-green-300">
        <div className="card card-side bg-base-100 shadow-xl p-32 max-w-max  mx-auto gap-x-7">
          <figure>
            <img src={pdata.image} className="h-96 w-full" alt="Movie" />
          </figure>
          <div className="">
            <h2 className="text-6xl mb-4">{pdata.title}</h2>
            <p className="mb-4 text-2xl">
              <span className="font-semibold">Brand:</span> {pdata.brand}
            </p>
            <p className="mb-4 text-2xl">
              <span className="font-semibold">Available Quantity:</span>{" "}
              {pdata.available_quantity}.
            </p>
            <p className="mb-4 text-2xl">
              <span className="font-semibold">Price: </span>
              {pdata.price}
            </p>
            <p className="mb-4 text-2xl">
              <span className="font-semibold">Rating:</span> {pdata.rating}
            </p>

            <div className="mt-20">
              <Link to="/cart" className="btn btn-primary">
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

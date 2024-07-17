import { Link } from "react-router-dom";
import ProductsDetails from "./ProductsDetails";

const Products = () => {
  const fakedata = [
    {
      id: 1,
      image:
        "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
      title: "Product 1",
      brand: "Brand A",
      available_quantity: 10,
      price: 29.99,
      rating: 4.5,
    },
    {
      id: 2,
      image:
        "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
      title: "Product 2",
      brand: "Brand B",
      available_quantity: 5,
      price: 49.99,
      rating: 3.8,
    },
    {
      id: 3,
      image:
        "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
      title: "Product 3",
      brand: "Brand C",
      available_quantity: 8,
      price: 39.99,
      rating: 4.2,
    },
    {
      id: 4,
      image:
        "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
      title: "Product 4",
      brand: "Brand A",
      available_quantity: 12,
      price: 19.99,
      rating: 4.0,
    },
    {
      id: 5,
      image:
        "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
      title: "Product 5",
      brand: "Brand B",
      available_quantity: 3,
      price: 59.99,
      rating: 4.8,
    },
    {
      id: 6,
      image:
        "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
      title: "Product 6",
      brand: "Brand B",
      available_quantity: 3,
      price: 59.99,
      rating: 4.8,
    },
  ];
  return (
    <div>
      <div>
        <div className="grid grid-cols-2 gap-4 p-10">
          {fakedata.map((prod) => (
            <ProductsDetails key={prod.id} prod={prod}></ProductsDetails>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Products;

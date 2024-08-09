import { useEffect, useState } from "react";
import { useAddOrderMutation } from "../../redux/features/checkout/CheckoutApi";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/features/cart/CartSlice";

export type Item = {
  _id: string;
  available_quantity: number;
  brand: string;
  cartQuantity: number;
  cartTotalAmount: number;
  description: string;
  image: string;
  name: string;
  price: number;
  rating: number;
};

const CheckoutForm = () => {
  const [addOrder, { isLoading }] = useAddOrderMutation();

  if (isLoading) {
    <p>Loading.....</p>;
  }

  const location = useLocation();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { items, totalAmount } = location.state;
  console.log("ITEMS:", items);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    payment: "",
    productIdAndQuantity: [] as { productId: string; quantity: number }[],
  });

  useEffect(() => {
    console.log("Items ase:", items);
    if (items) {
      const productIdAndQuantity = items.map((item: Item) => ({
        productId: item._id,
        quantity: item.cartQuantity,
      }));
      console.log("Product ID and Quantity:", productIdAndQuantity);
      setFormData((prevData) => ({
        ...prevData,
        productIdAndQuantity,
      }));
    }
  }, [items]);

  // useEffect(() => {
  //   console.log("Location state:", location.state);
  //   console.log("Items:", items);
  // }, [location.state, items]);
  // // console.log("FORM DATA:", formData);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log("FORMDATA", formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await addOrder(formData).unwrap();

      if (result.success) {
        console.log("hoise");
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Order placed successfully!",
        });

        setFormData({
          name: "",
          email: "",
          address: "",
          payment: "",
          productIdAndQuantity: [] as { productId: string; quantity: number }[],
        });
        dispatch(clearCart());
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errorMessage =
        error?.data?.message ||
        "Order submission failed. Please Fill the blanks properly or try again later!";

      if (errorMessage === "Not Enough Stock") {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Order submission failed. One or more products have insufficient stock!",
        });
      } else if (errorMessage === "Validation Error") {
        Swal.fire({
          icon: "error",
          title: "Wrong Inputs",
          text: "Please Check and fill the inputs properly to place an order!",
        });
      }
      console.error("Order submission failed:", errorMessage);
    }
  };

  return (
    <div className="bg-blue-100 p-16 rounded-lg shadow-lg w-full max-w-lg mx-auto mt-10 h-full">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="payment-method"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Payment Method
          </label>
          <select
            id="payment"
            name="payment"
            value={formData.payment}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled>
              Select a payment method
            </option>
            <option value="Bkash">Bkash</option>
            <option value="Nagad">Nagad</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Paypal">PayPal</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>

        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Place Order
        </button>
      </form>
      <ul className="flex flex-col items-center justify-center mt-6 gap-y-5 bg-blue-300">
        {items && items.length > 0 ? (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          items.map((item: any) => (
            <li
              key={item._id}
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="flex flex-row gap-x-5 justify-center items-center">
                <div>
                  {item.image && (
                    <img
                      className="w-40 h-40 object-cover "
                      src={item.image}
                      alt={item.name}
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <h2 className=" font-mono mb-4">{item.name}</h2>
                  <h2 className=" font-mono mb-4">
                    Product Price: {item.price}
                  </h2>
                  <div className="flex items-center gap-x-2 mb-4">
                    <span className="">Quantity: {item.cartQuantity}</span>
                  </div>
                </div>
              </div>
            </li>
          ))
        ) : (
          <li className="text-2xl font-mono">
            Oops!!You have not added something to the cart to checkout!!
          </li>
        )}
      </ul>
      <div>
        <h3 className="font-bold text-end mt-2">Subtotal: {totalAmount} BDT</h3>
      </div>
    </div>
  );
};

export default CheckoutForm;

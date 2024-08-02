import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  addToCart,
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../redux/features/cart/CartSlice";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Cart = () => {
  const location = useLocation();
  const prod = location.state;

  const dispatch = useAppDispatch();
  const items = useSelector((state) => state.cart.cartItems);
  const totalAmount = useAppSelector((state) => state.cart.cartTotalAmount);
  const totalItems = useAppSelector((state) => state.cart.cartQuantity);
  const image = useAppSelector((state) => state.cart.imageUrl);

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleIncrementQuantity = (id: string) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrementQuantity = (id: string) => {
    dispatch(decrementQuantity(id));
  };
  useEffect(() => {
    const handleBeforeUnload = (event: {
      preventDefault: () => void;
      returnValue: string;
    }) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  console.log("items: ", items);
  return (
    <div className="min-h-screen bg-blue-200">
      <h2 className="text-5xl font-bold text-center text-pink-500">
        Shopping Cart
      </h2>

      <button onClick={handleClearCart}></button>
      <h2 className="text-4xl font-semibold text-gray-800 text-center">
        Total Items: {totalItems}
      </h2>

      <ul className="flex flex-col items-center justify-center mt-6 gap-y-5">
        {items && items.length > 0 ? (
          items.map((item) => (
            <li key={item.id} style={{ display: "flex", alignItems: "center" }}>
              <div className="flex flex-row gap-x-5 justify-center items-center">
                <div>
                  {item.image && (
                    <img
                      className="w-96 h-96 object-cover "
                      src={item.image}
                      alt={item.name}
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl font-mono mb-4">{item.name}</h2>
                  <h2 className="text-2xl font-mono mb-4">
                    Product Price: {item.price}
                  </h2>
                  <div className="flex items-center gap-x-2 mb-4">
                    <span className="text-2xl">
                      Quantity: {item.cartQuantity}
                    </span>

                    <button
                      className="bg-gray-400 text-black py-1 px-3 rounded"
                      onClick={() => handleIncrementQuantity(item._id)}
                    >
                      +
                    </button>
                    <button
                      className="bg-gray-400 text-black py-1 px-3 rounded"
                      onClick={() => handleDecrementQuantity(item._id)}
                    >
                      -
                    </button>
                  </div>
                  <button
                    className="btn btn-primary mt-6"
                    onClick={() => handleRemoveItem(item._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <li className="text-2xl font-mono">No items in the cart</li>
        )}
      </ul>

      {items && items.length > 0 && (
        <h2 className="text-3xl font-semibold text-gray-800 text-center mt-4 p-4">
          <span className="border   bg-blue-400 rounded-md p-2">
            Total Price: {totalAmount} BDT
          </span>
        </h2>
      )}
    </div>
  );
};

export default Cart;

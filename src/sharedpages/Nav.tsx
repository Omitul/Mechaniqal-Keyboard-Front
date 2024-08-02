import "daisyui/dist/full.css"; ///etar jnnoi@!ZZ
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../redux/hook";

const Navbar = () => {
  const cartItemsCount = useAppSelector((state) => state.cart.cartQuantity);
  const cartItemsTotalPrice = useAppSelector(
    (state) => state.cart.cartTotalAmount
  );
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/product-management">Product Management</NavLink>
      </li>
      <li>
        <NavLink to="about-us">About Us</NavLink>
      </li>
      <li>
        <NavLink to="contact-us">Contact Us</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-blue-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "500" }}>
          Mechaniqal Keyboard
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {/* Cart Section */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">
              {cartItemsCount}
            </span>
          </div>
          <div className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
            <div className="card-body">
              <span className="text-lg font-bold">{cartItemsCount} Items</span>
              <span className="text-info font-bold">
                Subtotal: {cartItemsTotalPrice} BDT
              </span>
              <div className="card-actions">
                <Link to={"cart"} className="btn btn-primary btn-block">
                  View cart
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End of Cart Section */}
      </div>
    </div>
  );
};

export default Navbar;

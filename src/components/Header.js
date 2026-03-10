import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cart items :", cartItems);

  return (
    <div className="flex justify-between items-center bg-gray-50 mb-2 h-15 shadow-md px-4">
      <div className="logo-container">
        <img className="object-contain mix-blend-darken w-24 aspect-3/2" src={LOGO_URL} />
      </div>
      <div className="">
        <ul className="flex p-4 items-center">
          <li className="ml-3 p-2 hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="ml-3 p-2 hover:underline">
            <Link to="/about">About Us</Link>
          </li>
          <li className="ml-3 p-2 hover:underline">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="ml-3 p-2 hover:underline">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="ml-3 p-2 hover:underline font-bold">
            <Link to={"/cart"}>Cart ({cartItems.length} Items)</Link>
          </li>
          <button
            className="ml-3 px-3 py-2 hover:bg-gray-300 bg-gray-200 rounded-sm cursor-pointer"
            onClick={() => {
              setBtnName(btnName == "login" ? "logout" : "login");
            }}
          >
            {btnName}
          </button>
          <li className="ml-3 p-2 font-bold text-md">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

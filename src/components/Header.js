import { useState } from "react";
import LOGO_URL from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  return (
    <div className="flex justify-between items-center bg-pink-100 mb-2">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="">
        <ul className="flex p-4">
          <li className="ml-2">
            <Link to="/">Home</Link>
          </li>
          <li className="ml-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="ml-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="ml-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="ml-2 p-2 hover:bg-green-100 bg-gray-100 rounded-[3px]"
            onClick={() => {
              setBtnName(btnName == "login" ? "logout" : "login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

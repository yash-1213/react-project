import RestroCard, { withVegLabel } from "./RestroCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { BASE_URL } from "../utils/constants";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestroState, setListOfRestroState] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);

  const [searchTxt, setSearchTxt] = useState("");

  const RestroCardVeg = withVegLabel(RestroCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${BASE_URL}listRestaurants`);
    const json = await data.json();
    const actualDataArr = await json?.data?.data?.cards?.filter((item) => item.card)?.[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((restro) => restro?.info);
    setListOfRestroState(actualDataArr);
    setFilteredRestro(actualDataArr);
  };

  if (!listOfRestroState.length) {
    return <Shimmer />;
  }

  return (
    <div className="body-container">
      <div className="flex p-4">
        <div className="search-container">
          <input
            type="text"
            className="border rounded-sm p-1"
            placeholder="search"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button
            className="bg-gray-200 px-3 py-1 ml-3 rounded-sm hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              const filteredRestroData = listOfRestroState?.filter((res) => res?.name.toLowerCase().includes(searchTxt.toLowerCase()));
              setFilteredRestro(filteredRestroData);
            }}
          >
            Search
          </button>
          <button
            className="bg-gray-200 px-3 py-1 ml-3 rounded-sm hover:bg-gray-100 cursor-pointe"
            onClick={() => {
              setFilteredRestro(listOfRestroState);
            }}
          >
            Clear
          </button>
        </div>
        <button
          className="bg-gray-200 px-3 py-1 ml-3 rounded-sm hover:bg-gray-100 cursor-pointe"
          onClick={() => {
            const filteredList = listOfRestroState?.filter((restro) => restro.avgRating > 4.4);
            setFilteredRestro(filteredList);
          }}
        >
          Top Rated Restro
        </button>
        <div className="ml-3">
          <label>User Name :</label>
          <input className="border border-gray-400 p-1 rounded-sm ml-2" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestro.map((restro) => (
          <Link key={restro.id} to={`/restaurant/${restro.id}`}>
            {restro.veg ? <RestroCardVeg resData={restro} /> : <RestroCard resData={restro} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

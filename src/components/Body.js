import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { BASE_URL } from "../utils/constants";
import { Link } from "react-router";

const Body = () => {
  //   Another way to define state variable
  //   const res = useState(resObj);
  //   const listOfRestroState = res[0];
  //   const setListOfRestroState = res[1];

  // Local State Variable - super powerful variable
  const [listOfRestroState, setListOfRestroState] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);

  const [searchTxt, setSearchTxt] = useState("");

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
      <div className="filter-container">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="search"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestroData = listOfRestroState?.filter((res) => res?.name.toLowerCase().includes(searchTxt.toLowerCase()));
              setFilteredRestro(filteredRestroData);
            }}
          >
            Search
          </button>
          <button
            onClick={() => {
              setFilteredRestro(listOfRestroState);
            }}
          >
            Clear
          </button>
        </div>
        <button
          className="filter-container-btn"
          onClick={() => {
            const filteredList = listOfRestroState?.filter((restro) => restro.avgRating > 4.4);
            setFilteredRestro(filteredList);
          }}
        >
          Top Rated Restro
        </button>
      </div>
      <div className="restro-container">
        {filteredRestro.map((restro) => (
          <Link key={restro.id} to={`/restaurant/${restro.id}`}>
            <RestroCard resData={restro} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

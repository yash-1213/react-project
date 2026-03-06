import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

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
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
    const json = await data.json();
    const actualDataArr = json?.data?.cards?.map((item) => item?.card?.card?.info)?.filter((item) => item);
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
          <RestroCard key={restro.id} resData={restro} />
        ))}
      </div>
    </div>
  );
};

export default Body;

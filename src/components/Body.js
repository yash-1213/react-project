import RestroCard from "./RestroCard";
import { useState } from "react";
import resObj from "../utils/mockData";

const Body = () => {
  // Local State Variable - super powerful variable
  const [listOfRestroState, setListOfRestroState] = useState(resObj);

  //   Another way to define state variable
  //   const res = useState(resObj);
  //   const listOfRestroState = res[0];
  //   const setListOfRestroState = res[1];

  return (
    <div className="body-container">
      <div className="filter-container">
        <button
          className="filter-container-btn"
          onClick={() => {
            const filteredList = listOfRestroState?.filter((restro) => restro.avgRating > 4);
            console.log("filteredList :", filteredList);
            setListOfRestroState(filteredList);
          }}
        >
          Top Rated Restro
        </button>
      </div>
      <div className="restro-container">
        {listOfRestroState.map((restro) => (
          <RestroCard key={restro.id} resData={restro} />
        ))}
      </div>
    </div>
  );
};

export default Body;

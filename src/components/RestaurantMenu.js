import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { BASE_URL } from "../utils/constants";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [restroData, setRestroData] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(`${BASE_URL}listRestaurantMenu/${resId}`);
    const json = await data?.json();
    setRestroData(json.data);
  };

  if (!restroData) {
    return <Shimmer />;
  }

  const { name, costForTwo, cuisines } = restroData?.cards[2]?.card?.card?.info;
  const { itemCards } = restroData.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  return (
    <div className="menu-container">
      <h1>{name}</h1>
      <p>{costForTwo}</p>
      <h2>{cuisines.join(", ")}</h2>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name}: ₹{item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

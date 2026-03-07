import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  /**
   * Custom hooks
   * for getting the menu list from the custom hooks
   */
  const restroData = useRestaurantMenu(resId);

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

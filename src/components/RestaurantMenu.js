import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestroCategory from "./RestroCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  /**
   * Custom hooks
   * for getting the menu list from the custom hooks
   */
  const restroData = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (!restroData) {
    return <Shimmer />;
  }

  const { name, costForTwo, cuisines } = restroData?.cards?.[2]?.card?.card?.info;

  const categories = restroData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => c?.card?.card?.["@type"].toLowerCase().includes("ItemCategory".toLowerCase()));

  return (
    <div className="text-center">
      <div className="font-bold text-2xl my-6">{name}</div>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwo}
      </p>
      {categories.map((category, index) => (
        // controlled component
        <RestroCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex && true}
          setShowIndex={() => {
            index !== showIndex ? setShowIndex(index) : setShowIndex(null);
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

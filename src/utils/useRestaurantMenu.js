import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [restroData, setRestroData] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(`${BASE_URL}listRestaurantMenu/${resId}`);
    const json = await data?.json();
    setRestroData(json.data);
  };

  return restroData;
};

export default useRestaurantMenu;

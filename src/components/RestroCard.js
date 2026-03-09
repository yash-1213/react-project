import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = props?.resData;
  return (
    <div className="bg-gray-100 w-60 p-3 m-3 rounded-sm hover:bg-gray-200 min-h-70">
      <img className="w-full h-25 rounded-sm" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3 className="text-lg font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export const withVegLabel = (RestroCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-green-400 absolute ml-3 px-3 py-1 rounded-sm text-white">Veg</label>
        <RestroCard {...props} />
      </div>
    );
  };
};

export default RestroCard;

import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestroCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = props?.resData;
  return (
    <div className="restro-card" style={styleCard}>
      <img className="restro-card-img" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestroCard;

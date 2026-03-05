import RestroCard from "./RestroCard";
import resObj from "../utils/mockData";

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">Search</div>
      <div className="restro-container">
        {resObj.map((restro) => (
          <RestroCard key={restro.id} resData={restro} />
        ))}
      </div>
    </div>
  );
};

export default Body;

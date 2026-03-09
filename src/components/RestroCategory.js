import ItemList from "./ItemList";

const RestroCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 bg-gray-100 my-4 p-4 mx-auto shadow-lg flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-md">
          {data?.title} ({data?.itemCards?.length})
        </span>
        <span className="font-bold text-md">{showItems ? "-" : "+"}</span>
      </div>

      {showItems && <ItemList itemData={data.itemCards} />}
    </div>
  );
};

export default RestroCategory;

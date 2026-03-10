import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ itemData }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div className="w-full">
      {itemData?.map((item) => (
        <div key={item.card.info.id} className="flex items-center w-6/12 mx-auto justify-between mb-3 border-b pt-5 pb-10 border-gray-300 last:border-none">
          <div className="flex-col flex items-start">
            <span className="text-lg font-bold">{item?.card?.info?.name}</span>
            <span className="font-bold">₹ {item?.card?.info?.price / 100}</span>
            <p className="text-start w-100 text-gray-600">{item?.card?.info?.description}</p>
          </div>
          <div className="relative">
            <img src={CDN_URL + item?.card?.info?.imageId} className="w-40 rounded-lg" />
            <div className="absolute w-full top-25">
              <button
                className="text-green-600 border border-gray-200 py-2 px-8 rounded-md font-bold bg-white shadow cursor-pointer"
                // onClick={handleAddItem}
                onClick={() => handleAddItem(item)}
                // onClick={handleAddItem(item)}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

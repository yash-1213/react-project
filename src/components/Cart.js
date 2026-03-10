import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div>
        {cartItems.length !== 0 && (
          <button className="border p-2 m-2 bg-gray-100 border-gray-100 rounded-md cursor-pointer hover:bg-gray-200" onClick={handleClearCart}>
            Clear Cart
          </button>
        )}
      </div>
      {cartItems.length === 0 && <h1>Cart is empty!</h1>}
      <div>
        <ItemList itemData={cartItems} />
      </div>
    </div>
  );
};

export default Cart;

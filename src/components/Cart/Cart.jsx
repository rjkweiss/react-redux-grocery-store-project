import CartItem from "./CartItem";
import './Cart.css';
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../store/slices/CartSlice";
import { getCartItems } from "../../store/slices/CartSlice";

const Cart = () => {
    const dispatch = useDispatch();

    const cartItems = useSelector(getCartItems);

    if (!cartItems || !cartItems.length) {
        return (
            <div className="cart">
                No items in the cart. Start selecting items to purchase.
            </div>
        );
    }

    const onSubmit = (e) => {
        e.preventDefault();

        window.alert(
            "Purchased the following: \n" +
            `${cartItems.map(item => `${item.count} of ${item.name}`).join(`\n`)}`
        );
    };

    return (
        <div className="cart">
            <ul>
                {cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
            </ul>
            <hr />
            <form onSubmit={onSubmit}>
                <button type="submit" onClick={() => dispatch(clearCart())}>Purchase</button>
            </form>
        </div>
    );

};

export default Cart;

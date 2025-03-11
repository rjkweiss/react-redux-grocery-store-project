import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { incrementCounter, decrementCounter, updateCounter } from "../../store/slices/CartSlice";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(item.count);

    // sync local state with redux state
    useEffect(() => {
        setCount(item.count);
    }, [item.count]);

    // handle manual input (input field value change)
    const handleInputChange = (e) => {
        console.log("input field type: ", typeof e.target.value, e.target.value)
        setCount(e.target.value);
    };

    // dispatch when input field loses focus --> user clicks away
    const handleBlur = () => {
        dispatch(updateCounter({ id: item.id, count }));
    }


    return (
        <li className="cart-item">
            <div className="cart-item-header">{item.name}</div>
            <div className="cart-item-menu">
                <input
                    type="number"
                    value={count}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
                <button
                    className="cart-item-button"
                    onClick={() => dispatch(incrementCounter(item.id))}
                >
                    +
                </button>
                <button
                    className="cart-item-button"
                    onClick={() => dispatch(decrementCounter(item.id))}
                >
                    -
                </button>
                <button
                    className="cart-item-button"
                    onClick={() => dispatch(updateCounter({ id: item.id, count: 0}))}
                >
                    Remove
                </button>
            </div>
        </li>
    );
};

export default CartItem;

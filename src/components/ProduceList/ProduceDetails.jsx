import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/CartSlice";
import { toggleLiked } from "../../store/slices/ProduceSlice";

const ProduceDetails = ({ produce }) => {
    const dispatch = useDispatch();

    const cartItem = {};

    return (
        <li className="produce-details">
            <span>{produce.name}</span>
            <span>
                <button
                    className={`like-button ${produce.liked ? "selected": ""}`}
                    onClick={() => dispatch(toggleLiked(produce.id))}
                >
                    <i className={"fas fa-heart"} />
                </button>
                <button
                    className={`plus-button ${cartItem ? "selected": ""}`}
                    onClick={(e) => dispatch(addToCart(produce.id))}
                >
                    <i className="fas fa-plus" />
                </button>
            </span>
        </li>
    );
};

export default ProduceDetails;

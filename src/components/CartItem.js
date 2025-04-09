import React from 'react';
import {removeItem} from "../utils/store/cartSlice";
import {useDispatch} from "react-redux";

const CartItem = ({restoInfo}) => {
    const dispatch = useDispatch();

    const handleRemoveItem = () => {
        dispatch(removeItem(restoInfo));
    };

    return (
        <div key={restoInfo.id} className={"p-2 border-b-2 text-left w-6/12 m-auto"} data-testid="cartItem">
            <div>
                <span>{restoInfo.name}</span>
                <div className="flex justify-end">
                    <button className="text-sm text-white bg-amber-500 rounded p-2" onClick={handleRemoveItem}>Remove
                    </button>
                </div>
            </div>
            <div className={"text-sm"}>
                <span>{restoInfo.defaultPrice ? restoInfo.defaultPrice : restoInfo.price} peso</span>
            </div>
            <p className={"text-xs"}>{restoInfo.description}</p>
        </div>)
};

export default CartItem;
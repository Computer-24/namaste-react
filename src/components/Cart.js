import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import CartItem from "./CartItem";
import {clearCart} from "../utils/store/cartSlice";

const Cart = () => {
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    };
    return (
         <div className={"text-center m-4 p-4"}>
                <div className={"text-lg font-bold "}>Cart</div>
                {items.map((item) => {
                    return (
                        <CartItem key={item.id} restoInfo={item}/>
                    )
                })}
                <button className={"bg-red-500 text-white m-4 p-2 rounded"} onClick={handleClearCart}>Clear cart</button>
            </div>
    );
};

export default Cart;
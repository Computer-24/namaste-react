import React from 'react';
import {addItem} from "../utils/store/cartSlice";
import {useDispatch} from "react-redux";

const MenuItem = ({restoInfo}) => {
    const dispatch = useDispatch();

    const handleAddItem = () => {
        dispatch(addItem(restoInfo));
    };

    return (<div key={restoInfo.id} className={"p-2 m-2 border-b-2 text-left"} data-testid="foodItem">
        <div>
            <span>{restoInfo.name}</span>
            <div className="flex justify-end">
                <button className="text-sm bg-green-400 rounded p-2" onClick={handleAddItem}>Add+</button>
            </div>
        </div>
        <div className={"text-sm"}>
            <span>{restoInfo.defaultPrice ? restoInfo.defaultPrice : restoInfo.price} peso</span>
        </div>
        <p className={"text-xs"}>{restoInfo.description}</p>
    </div>)
};

export default MenuItem;
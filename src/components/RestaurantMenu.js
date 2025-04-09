import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/hooks/useRestourantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const {resId} = useParams()
    const {restaurant, categories} = useRestaurantMenu(resId);
    const [categoryId, setCategoryId] = useState(0)

    return restaurant && (
        <div className={"text-center"}>
            <h1 className={"font-bold text-2xl my-6"}>{restaurant?.name}</h1>
            <p className={"font-bold text-lg"}>{restaurant?.costForTwoMessage}</p>
            {restaurant?.cuisines.map((item, index) => (
                <h3 key={index}>{item}</h3>
            ))}
            {categories.map((item) => {
                return (<RestaurantCategory showItem={item.card.card.categoryId === categoryId} data={item}
                                            onSetCategory={setCategoryId}
                                            key={item.card.card.categoryId}/>)
            })}
        </div>
    );
};

export default RestaurantMenu;
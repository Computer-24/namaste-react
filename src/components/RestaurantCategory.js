import React, {useState} from 'react';
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItem, onSetCategory}) => {
    const categoryInfo = data?.card?.card

    function handleClick() {
        onSetCategory(prevState => {
            return categoryInfo.categoryId === prevState ? "0" : categoryInfo.categoryId;
        })
    }

    return (
        <div>
            <div className={"w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 "} >
                <div className={"flex justify-between cursor-pointer"}  onClick={handleClick}>
                    <span className={"font-semibold text-xl"}>
                     {categoryInfo.title} {`(${categoryInfo.itemCards.length})`}
                </span>
                    <span>{showItem ? "⬆️" : "⬇️"}</span>
                </div>
                {showItem && (<ItemList items={categoryInfo.itemCards} />)}
            </div>
        </div>
    );
};

export default RestaurantCategory;
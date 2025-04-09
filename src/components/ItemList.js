import React from 'react';
import MenuItem from "./MenuItem";

const ItemList = ({items}) => {

    return (
        <div>

            <div>
                {items.map((item) => {
                    const resto = item.card.info;
                    return (
                        <MenuItem key={resto.id} restoInfo={resto}/>
                    )
                })}
            </div>
        </div>
    );
};

export default ItemList;
import {useEffect, useState} from "react";
import {MENU_URL} from "../constants";

const useRestaurantMenu = (resId) => {
    const [restaurant, setRestaurant] = useState();
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(`${MENU_URL}${resId}`);

        const json = await data.json();
        console.log("FETCH MENU",json)
        const categories = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((item) =>
            item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
        setCategories(categories);
        const restData = json.data.cards[2].card.card.info;
        setRestaurant(restData);
    };

    return {restaurant, categories}
}

export default useRestaurantMenu;
import {useContext} from "react";
import UserContext from "../utils/context/UserContext";
import {Link} from "react-router-dom";

export const RestaurantComponent = (props) => {
    const {name, cuisines, avgRating, sla, id} = props.resData.info
    const {loggedUser} = useContext(UserContext);

    return (
            <div className="m-4 p-4 w-[250px] bg-gray-200 hover:bg-gray-400" data-testid="restaurantCard">
                <Link to={`/restaurants/${props.resData.info.id}`}>
                    <img className="w-300 rounded"
                         src="https://media.gettyimages.com/id/1156100363/photo/raspberry-coulis.jpg?s=2048x2048&w=gi&k=20&c=IEWosA4HDThIG_HuZufT7RcvEQUzS8jHcPz3huDMhgQ="
                         alt=""/>
                    <h3 className={"font-bold py-4 text-lg"}>{name}</h3>
                    <h4>{cuisines.join(", ")}</h4>
                    <h4>{avgRating} stars</h4>
                    <h4>{sla.deliveryTime} minutes</h4>
                    <h4>{loggedUser}</h4>
                </Link>
            </div>
    )
}

export const withPromotedLabel = (RestaurantComponent) => {
    return (props) => {
        return (
            <div>
                <label className={"absolute bg-black text-white my-20 rounded p-1"}>Promoted</label>
                <RestaurantComponent resData={props.resData}/>
            </div>
        )
    }
}
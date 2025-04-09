import {useContext, useEffect, useState} from "react"
import {RestaurantComponent, withPromotedLabel} from "./RestaurantComponent"
import {BASE_URL} from "../utils/constants";
import {Shimmer} from "./Shimmer";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import UserContext from "../utils/context/UserContext";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [listOfFilteredRestaurants, setListOfFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")
    const isOnline = useOnlineStatus()
    const {loggedUser, setUserInfo} = useContext(UserContext)


    const RestaurantCardPromoted = withPromotedLabel(RestaurantComponent)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await fetch(BASE_URL)
        const data = await response.json()
        console.log(data)
        const newListOfRestaurants = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setListOfRestaurants(newListOfRestaurants)
        setListOfFilteredRestaurants(newListOfRestaurants)
    }
    if (!isOnline) {
        return (
            <h1>Looks like you are offline =(</h1>
        )
    }

    return listOfRestaurants?.length === 0 ? <Shimmer/> : (
        <>
            <div className="body">
                <div className={"flex"}>
                    <div className="py-4">
                        <input type="text" className="border py-2" placeholder="Search Restaurants" value={searchText}
                               onChange={(e) => setSearchText(e.target.value)}/>
                        <button className="m-2 px-4 py-2 bg-green-200 rounded" onClick={() => {
                            setListOfFilteredRestaurants(listOfRestaurants.filter(restaurant =>
                                restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())))

                        }}>Search
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => {
                                    setListOfFilteredRestaurants(listOfRestaurants.filter(res => res.info.avgRating > 4))
                                }}>Top Restaurants
                        </button>

                        <input type="text" className="border py-2 mx-2" placeholder="User name" value={loggedUser}
                               onChange={(e) => setUserInfo({loggedUser: e.target.value})}/>

                    </div>
                </div>
                <div className="flex flex-wrap">
                    {listOfFilteredRestaurants?.map((restaurant) => {
                        return (restaurant.info.availability.opened ?
                            <RestaurantCardPromoted resData={restaurant} key={restaurant.info.id}/> :

                            <RestaurantComponent resData={restaurant} key={restaurant.info.id}/>)


                    })}
                </div>
            </div>
        </>
    )
}

export default Body
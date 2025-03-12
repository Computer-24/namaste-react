
import { useState } from "react"
import { RestourantComponent } from "./RestourantComponent"
import { data } from "./utils/data"


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([...data])


    return (
        <>
            <div className="body">
                <div className="filter">
                    <button className="filter-btn" onClick={() => {
                        setListOfRestaurants(data.filter(res => res.info.avgRating > 4))
                    }}>Top Restos</button>
                </div>
                <div className="res-container">
                    {listOfRestaurants?.map((restourantList) => {
                        return <RestourantComponent resData={restourantList} key={restourantList.info.id} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Body
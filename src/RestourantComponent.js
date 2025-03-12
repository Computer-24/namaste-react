export const RestourantComponent = (props)  => {
    const { name, cuisines, avgRating, sla } = props.resData.info
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" src="https://media.gettyimages.com/id/1156100363/photo/raspberry-coulis.jpg?s=2048x2048&w=gi&k=20&c=IEWosA4HDThIG_HuZufT7RcvEQUzS8jHcPz3huDMhgQ=" alt="" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}
import Restaurantcard from "./RestaurantCard";
import resList from "../utils/mockData"


const Body = () => {
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => { console.log("Button clicked") }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {resList.map((res) => {
                    return <Restaurantcard key={res.info.id} resData={res} />
                })}

            </div>
        </div>
    )
}
export default Body;
import {React,useState} from "react";
import Restaurantcard from "./RestaurantCard";
import resList from "../utils/mockData"


const Body = () => {

    const [filteredList,setFilteredList] = useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    setFilteredList(resList.filter((res) => res.info.avgRating > 4.6))
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredList.map((res) => {
                    return <Restaurantcard key={res.info.id} resData={res} />
                })}

            </div>
        </div>
    )
}
export default Body;
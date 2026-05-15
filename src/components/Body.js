import {React,useEffect,useState} from "react";
import Restaurantcard from "./RestaurantCard";
import resList from "../utils/mockData"


const Body = () => {

    const [filteredList,setFilteredList] = useState(resList);

    useEffect(() => {
       fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://corsproxy.io/?" +
            encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        );
        const json = await data.json();
        console.log(json);
    }


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
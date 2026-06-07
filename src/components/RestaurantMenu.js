import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        try {
            const data = await fetch(
                MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
            );
            console.log("Status:", data.status, "OK:", data.ok);
            const text = await data.text();
            console.log("Raw response (first 200 chars):", text.slice(0, 200));
            const json = JSON.parse(text);

            setResInfo(json?.data)


        } catch (err) {
            console.error("fetchMenu error:", err);
        }
    }
    if (resInfo === null) return <Shimmer />;

    const { name, cloudinaryImageId, costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log("itemCards", resInfo)
    return (
        <div className="res-menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(",")} -{costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}-{item.card.info.price}</li>)}

            </ul>


        </div>)

}
export default RestaurantMenu;
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);
    if (resInfo === null) return <Shimmer />;

    const info = resInfo?.cards[2]?.card?.card?.info;
    if (!info) return <Shimmer />;

    const { name, cloudinaryImageId, costForTwoMessage, cuisines } = info;

    const { itemCards } = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ?? {};
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
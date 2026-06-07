import { useEffect, useState } from "react";
import { MENU_API } from "./constant";
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, [])

    //fetchdata
    const fetchData = async () => {
        try {
            const data = await fetch(
                MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
            );
            console.log("Status:", data.status, "OK:", data.ok);
            const text = await data.text();
            console.log("Raw response (first 200 chars):", text.slice(0, 200));
            const json = JSON.parse(text);
            setResInfo(json?.data);
            return resInfo;
        } catch (err) {
            console.error("fetchMenu error:", err);
        }
    }
    return resInfo;
}
export default useRestaurantMenu;
import { CDN_IMG } from "../utils/constant";

const Restaurantcard = ({resData}) => {
//    console.log(resData,"resData");
   const {cloudinaryImageId, name, avgRating, cuisines} = resData?.info;
   console.log(cloudinaryImageId,"cloudinaryImageId");

    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_IMG + cloudinaryImageId} alt="logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>Rating: {avgRating}</h4>
        </div>
    )
}
export default Restaurantcard;
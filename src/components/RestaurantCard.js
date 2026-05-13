import { CDN_IMG } from "../utils/constant";

const Restaurantcard = ({resData}) => {
//
const {
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  costForTwo,
  sla: { deliveryTime } = {},
} = resData?.info || {};
   

    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_IMG + cloudinaryImageId} alt="logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>Rating: {avgRating}</h4>
            <h4>Delivery Time: {deliveryTime} mins</h4>
            <h4>Cost for Two: {costForTwo}</h4>
        </div>
    )
}
export default Restaurantcard;
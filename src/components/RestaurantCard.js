import { useContext } from "react";
import { RESCARD_URL } from "../utils/constants";
import UserContext from "../utils/userContext";

//javascript object
const styleCard = {
    backgroundColor: "#f0f0f0"
}



//props are also Javascript object
const RestaurantCard = (props) => {
   const {resData} = props;
   const {cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;
   const deliveryTime = resData?.info?.sla?.deliveryTime;

   const {loggedInUser} = useContext(UserContext);

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 shadow-lg">
        <img className="rounded-lg" alt= "res-logo" src={RESCARD_URL + cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>User: {loggedInUser}</h4>
        </div>
    );
}

//Higher Order Components

//Input - RestaurantCard ==> Output - RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) =>{
    return ((props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    })
}

export default RestaurantCard;
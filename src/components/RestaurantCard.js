import { RESCARD_URL } from "../utils/constants";

//javascript object
const styleCard = {
    backgroundColor: "#f0f0f0"
}



//props are also Javascript object
const RestaurantCard = (props) => {
   const {resData} = props;
   const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime  } = resData?.data;

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 shadow-lg">
        <img className="rounded-lg" alt= "res-logo" src={RESCARD_URL + cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>Rs.{costForTwo/100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
}

export default RestaurantCard;
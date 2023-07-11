import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantInfo = () => {
  
    const {resId} = useParams();
    console.log(resId);

    const resInfo = useRestaurantMenu(resId);   //Custom Hook


if( resInfo===null) return <Shimmer/> ;


    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
     console.log(itemCards);

    return(
    <div className='menu'>
        <h2>{name}</h2>
          <p>{cuisines.join(", ")} - {costForTwoMessage}</p>  
        <h3>Menu</h3>
        <ul>
            {itemCards.map((item) =>( <li key= {item.card.info.id}>
                {item.card.info.name} - Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100} 
            </li>))}
        </ul>
        
    </div>
  )
}

export default RestaurantInfo;

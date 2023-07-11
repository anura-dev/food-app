import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../utils/constants';

const RestaurantInfo = () => {
  
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    console.log(resId);

    useEffect(() =>{
        fetchMenu();
    },[]);

const fetchMenu = async() =>{
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log(json);

    setResInfo(json.data);
}

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

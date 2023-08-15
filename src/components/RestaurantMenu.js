import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);   //Custom Hook

    const [showIndex, setShowIndex] = useState(); 
    // if showIndex=0 -> Ist accordian expand, all other collapse
    // if showIndex=1 -> 2nd accordian expand, all other collapse


if( resInfo===null) return <Shimmer/> ;


    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
 
     //console.log( resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards, "categories");
     
     const categories =resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=> c.card?.["card"]?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');

       // console.log(categories,"Catee");
       

    return(
    <div className='text-center'>
        <h2 className='font-bold my-6 text-2xl'>{name}</h2>
          <p className='font-bold text-lg'>{cuisines.join(", ")} - {costForTwoMessage}</p>  
          {/** categories */}

          {categories.map((category, index) => (
            //Controlled component as showItems state is controlling RestaurantCategory comp
            //THis is lifting the state up to control the child comp
            <RestaurantCategory 
              key={category?.card?.card?.title} 
              data={category?.card?.card}
              showItems={index===showIndex ? true : false}
              setShowIndex = {()=> setShowIndex(index)}
              />
            ))}
        
    </div>
  )
}

export default RestaurantMenu;

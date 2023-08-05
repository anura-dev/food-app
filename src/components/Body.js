import React, { useEffect, useState, useContext } from 'react';
import RestaurantCard, {withPromotedLabel} from './RestaurantCard';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/userContext';

import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
     const [searchText, setSearchText] = useState("");
     const [filteredRest, setFilteredRest] = useState([]);
     
     const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
     const {loggedInUser, setUserName} = useContext(UserContext);

     console.log(listOfRestaurants, "listofRest");

    const handleClickTopRated = () =>{
      return setFilteredRest(listOfRestaurants.filter((res) => res.info.avgRating>4));  
    }

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1766701&lng=78.00807449999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
       // console.log(json);
        //setListOfRestaurants(json?.data?.cards[5]?.data?.data?.cards); //optional chaining
        setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants); //optional chaining
         setFilteredRest(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants, "fdsgfdgfd")
    }

    // if(listOfRestaurants.length === 0)
    //     return <Shimmer />
    const onlineStatus= useOnlineStatus();

    if (onlineStatus === false) return <h1>Looks you are offline. Kindly check your internet connection</h1>;
    
  return (
     listOfRestaurants.length===0 ? <Shimmer/> : (
    <div className='body'>
        <div className='filter flex'>

        <div className='search m-4 p-4'>
                <input type= "text" className='border border-solid border-black' value={searchText} onChange={(e) =>setSearchText(e.target.value)}/>
                    <button className='px-4 py-1 m-3 bg-green-100 rounded-lg'
                     onClick={()=> {
                        console.log(searchText);
                        const filterList= listOfRestaurants.filter((res) => {
                            res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        })
                        
                        setFilteredRest(filterList);
                    }}>Search</button>
            </div>
  
        <div className='search m-2 p-4 flex items-center'>
            <button className='px-4 py-1 bg-gray-200 rounded-lg' onClick={handleClickTopRated}>Top Rated Restaurants</button>
        </div>
        <div className='search m-2 p-4 flex items-center'>
            <label>Username: </label>
            <input className='border border-black p-2' value={loggedInUser} onChange={(e)=> {setUserName(e.target.value)}} />
        </div>
        </div>

       
        
        <div className="flex flex-wrap">
            {/* restaurant cards */}
            {filteredRest && filteredRest.map((restaurant) => {
                return(
                 <Link key= {restaurant.info.id} to={ "/restaurant/" + restaurant.info.id}>
                
                    {restaurant.info.promoted ? <RestaurantCardPromoted resData= {restaurant}/> : <RestaurantCard resData= {restaurant}/>}
                 
                   
                 </Link>
                )
            })}
            
        </div>
    </div>
  )
  )
}

export default Body;

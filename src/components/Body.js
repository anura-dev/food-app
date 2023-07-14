import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import useOnlineStatus from '../utils/useOnlineStatus';

import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
     const [searchText, setSearchText] = useState("");
     const [filteredRest, setFilteredRest] = useState([]);

    const handleClickTopRated = () =>{
      return setFilteredRest(listOfRestaurants.filter((res) => res.data.avgRating>4.3));  
    }

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1766701&lng=78.00807449999999&sortBy=RATING&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
       // console.log(json);
        setListOfRestaurants(json?.data?.cards[0]?.data?.data?.cards); //optional chaining
         setFilteredRest(json?.data?.cards[0]?.data?.data?.cards);
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
                            res.data.name.toLowerCase().includes(searchText.toLowerCase());
                        })
                        
                        setFilteredRest(filterList);
                    }}>Search</button>
            </div>
  
        <div className='search m-2 p-4 flex items-center'>
            <button className='px-4 py-1 bg-gray-200 rounded-lg' onClick={handleClickTopRated}>Top Rated Restaurants</button>
        </div>
        </div>

       
        
        <div className="flex flex-wrap">
            {/* restaurant cards */}
            {filteredRest && filteredRest.map((restaurant) => {
                return(
               <Link key= {restaurant.data.id} to={ "/restaurant/" + restaurant.data.id}> <RestaurantCard resData= {restaurant}/></Link>
                )
            })}
            
        </div>
    </div>
  )
  )
}

export default Body;

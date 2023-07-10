import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
// import { resList } from '../utils/mockData';
import Shimmer from './Shimmer';

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRest, setFilteredRest] = useState([]);


    const handleClickTopRated = () =>{
      return setListOfRestaurants(listOfRestaurants.filter((res) => res.data.avgRating>4.4));  
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
    
  return (
    listOfRestaurants.length===0 ? <Shimmer/> : (
    <div className='body'>
        <div className='filter'>
            <div className='search'>
                <input type= "text" className='search-box' value={searchText} onChange={(e) =>setSearchText(e.target.value)}/>
                    <button onClick={()=> {
                        console.log(searchText);
                        const filterList= listOfRestaurants.filter((res) => {
                            res.data.name.toLowerCase().includes(searchText.toLowerCase());
                        })
                        
                        setFilteredRest(filterList);
                    }}>Search</button>
            </div>
         <button className='btn-filter' onClick={handleClickTopRated}>Top Rated Restaurants</button>
        </div>

       
        
        <div className="res-container">
            {/* restaurant cards */}
            {filteredRest && filteredRest.map((restaurant) => {
                return(
                <RestaurantCard key= {restaurant.data.id} resData= {restaurant}/>
                )
            })}
            
        </div>
    </div>
  )
  )
}

export default Body;

import React from 'react';

//javascript object
const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = () => {
    return (
        <div className="res-card" style= {styleCard}>
        <img className="res-logo" alt= "res-logo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ufrgm69mnqbvn36q6snp" />
            <h3>Jenith Fast Food</h3>
            <h4>Biryani, Pizza</h4>
            <h4>ratings:3</h4>
        </div>
    );
}

const Body = () => {
  return (
    <div className='body'>
        <div className='search'>Search</div>
        <div className="res-container">
            {/* restaurant card */}
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
        </div>
    </div>
  )
}

export default Body;

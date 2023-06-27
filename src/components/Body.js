import React from 'react';

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <h3>Anura foods</h3>
            
        </div>
    );
}

1
const Body = () => {
  return (
    <div className='body'>
        <div className='search'>Search</div>
        <div className="res-container">
            {/* restaurant card */}
            <RestaurantCard />
        </div>
    </div>
  )
}

export default Body;

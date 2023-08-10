import React from 'react'
import ItemList from "./ItemList";
import { useDispatch, useSelector } from 'react-redux';
import  {clearCart} from "../utils/cartSlice.js";

const Cart = () => {

    //only subscribe to that portion of the store which you want to use. But not the whole store
    //This will help in performance of the app. Rather than subscribing to the whole store only 
    //selecting the portion of the store 
    const cardItems = useSelector((store) => store.cart.items)
    console.log(cardItems);

    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart());
    }

  return (
    <div className='text-center m-4 p-4'>
        <h4 className='font-bold text-lg'>
            Cart
        </h4>
        <div className='w-6/12 m-auto'>
            <div className='text-left'>   
                <button className='bg-green-100 text-black p-2 m-2 rounded-lg shadow-lg'
                    onClick={handleClearCart}>
                    Clear Cart
                </button>
                {cardItems.length === 0 && (
                    <h2>Cart is empty. Add items to the cart!!</h2>
                )}
            </div>
            <ItemList items = {cardItems}/>
        </div>
    </div>
  )
}

export default Cart

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state,action) =>{

            // REDUX TOOLKIT => HAVE TO MUTATE THE EXISTING STATE, or, RETURN A NEW STATE
            // but immer library is doing behind the scenes 
            state.items.push(action.payload);

            //Vanilla(older) Redux => DON'T MUTATE THE STATE, return was mandatory
            //const newState = [...state];
            //newState.items.push(action.payload);
            //return newState;
        },
        removeItem: (state) =>{
            state.items.pop();
        },
        //originalState= {items: ["pizza"]}
        clearCart: (state) =>{
            //state.items.length =0; // can also do
            state.items = [];   //originalState =[]
            //return { items: [] }  //can also do // this new object will be replaced inside originalState = { items: [] }
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions; 
export default cartSlice.reducer;

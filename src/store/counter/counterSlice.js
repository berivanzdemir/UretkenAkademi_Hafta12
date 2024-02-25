import { createSlice } from "@reduxjs/toolkit";

const initialState={value:100}
const counterSlice=createSlice({
name:'counter',
initialState,
reducers:{
    incremenet(state){
        state.value++;

    },

addMore(state,action){
    console.log("addMore",state,action);
    state.value+=action.payload.item-action.payload.data
}
,
    reset(state){
        return initialState
    }
}


})


export const {incremenet,reset,addMore}=counterSlice.actions
export default counterSlice.reducer
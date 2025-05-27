import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: null,
}

export const personSlice = createSlice({
    name: 'tv',
    initialState,
    reducers:{
        loadtv:(state,action) =>{
            state.info = action.payload;
        },
        removetv:(state,action)=>{
            state.info = null;
        }
    }
  
})
export const {loadtv,removetv}=personSlice.actions;
export default personSlice.reducer
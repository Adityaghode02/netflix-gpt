import { createSlice } from "@reduxjs/toolkit";

const movieSclice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        }
    }
});

export const {addNowPlayingMovies} = movieSclice.actions;
export default movieSclice.reducer;

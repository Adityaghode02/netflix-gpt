import { createSlice } from "@reduxjs/toolkit";

const movieSclice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null
    },

    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addtrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload;
        }
    }
});

export const {addNowPlayingMovies , addtrailerVideo} = movieSclice.actions;
export default movieSclice.reducer;

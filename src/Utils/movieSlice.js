import { createSlice } from "@reduxjs/toolkit";

const movieSclice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        PopularMovies:null,
        trailerVideo:null
    },

    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies = action.payload;
        },
        addtrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload;
        }
    }
});

export const {addNowPlayingMovies , addtrailerVideo , addPopularMovies} = movieSclice.actions;
export default movieSclice.reducer;

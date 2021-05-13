import { createSlice } from '@reactjs/toolkit'

const initialState = {
    movies: []
}

const movieSlice  = createSlice({
    name: "movie",
    initialState,
})
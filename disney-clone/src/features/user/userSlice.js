import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "",
    email: "",
    photo: ""
}

const userSlice = createSlice({
    name: "user",
    initialState,
        reducers:{
            setUserLogin: (state, action) => {
                state.name = action.payload.name;
                state.email = action.payload.name;
                state.photo = action.payload.name;
            },
            setSignOut: (state) => {
                state.name = null;
                state.email = null;
                state.photo = null;
        }
    }
})
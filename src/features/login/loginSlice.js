import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentLogin: null };

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setCurrentLogin: (state, action) => ({
            ...state,
            currentLogin: action.payload
        })
    }
})

export const loginReducer = loginSlice.reducer;

export const { setCurrentLogin } = loginSlice.actions;

export const selectCurrentLogin = (state) => {
    return (
        state.login.currentLogin
    );
}
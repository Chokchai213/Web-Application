import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userId: null,
    userName: null,
    isLogIn: false
}

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        Login: (state, action) => {
            const {userId, userName} =  action.payload;
            state.userId = userId;
            state.usrName = userName;
            state.isLogIn = true;
        },
        Logout : (state) => {
            state.userId = null;
            state.userName = null;
            state.isLogIn = false;
        }
    }
})
export const {
    Login,
    Logout
} = userSlice.actions
export default userSlice.reducer
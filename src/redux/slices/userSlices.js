import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userAuth: [],
        loading: true,
    },
    reducers: {
        addUserAuth: (state, action) => {
            state.userAuth = action.payload
        },
        removeUserAuth: (state, action) => {
            state.userAuth = action.payload
        },
        handleLoading: (state, action) => {
            state.loading = action.payload
        },
       
    }
})
export const { addUserAuth, removeUserAuth, handleLoading } = userSlice.actions
export default userSlice.reducer
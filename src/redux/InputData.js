import { createSlice } from "@reduxjs/toolkit";


export const dataInputNewSlice = createSlice({
    name: 'newPassword',
    initialState: {
        newPassword: '',
        namePassword: '',
    },
    reducers: {
        getDataInput: (state, action) => {
            const {newPassword, namePassword} = action.payload
            state.namePassword = namePassword,
            state.newPassword = newPassword
        }
    }
})

export const { getDataInput } = dataInputNewSlice.actions
export default dataInputNewSlice.reducer;
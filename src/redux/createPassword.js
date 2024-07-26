import { createSlice } from "@reduxjs/toolkit";

const generatePassword = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
};


export const createPasswordSlice = createSlice({
    name: 'password',
    initialState: {
        value: '',
        length: 12
    },
    reducers: {
        generateNewPassword: (state) => {
            state.value = generatePassword(state.length)
        },
        upDatePassword: (state, action) => {
            state.value = action.payload
        }
        
    }
})

export const { generateNewPassword, upDatePassword} = createPasswordSlice.actions
export default createPasswordSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
    'getApiData/fetchData',
    async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character/2');
        const data = response.json();
        return data
    }
)

const initialState = {
    value: [],
}

export const getDataSlice = createSlice({
    name: 'getApiData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
    
})

export default getDataSlice.reducer;
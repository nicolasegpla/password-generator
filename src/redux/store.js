import { configureStore } from "@reduxjs/toolkit";
import  getDataSliceReducer  from "./getDataSlice";
import createPasswordReducer from './createPassword';
import inputDataReducer from './InputData';

export const store = configureStore({
    reducer: {
        dataFetchTest: getDataSliceReducer,
        newPassword: createPasswordReducer,
        inputData: inputDataReducer, 
    }
})
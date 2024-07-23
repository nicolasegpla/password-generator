import { configureStore } from "@reduxjs/toolkit";
import  getDataSliceReducer  from "./getDataSlice";
import createPasswordReducer from './createPassword'

export const store = configureStore({
    reducer: {
        dataFetchTest: getDataSliceReducer,
        newPassword: createPasswordReducer,
    }
})
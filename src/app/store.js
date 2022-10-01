import {configureStore} from "@reduxjs/toolkit"
import carReducer from '../components/featurs/car/carSlice'

export const store = configureStore({
    reducer: {
        car: carReducer
    }
})
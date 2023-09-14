import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import bookingSlice from './features/bookingSlice';
import selectedSeatSlice from './features/selectedSeatSlice';
export const  store = configureStore({
  reducer: {
    booking: bookingSlice,
    selectedSeats:selectedSeatSlice
    // Other reducers
  },
  middleware: [thunkMiddleware], 
});



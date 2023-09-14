import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    train_id: null,
    coach_id: null,
    seat_id: null,
  },
  reducers: {
    settrain_id: (state, action) => {
      state.train_id = action.payload;
    },
    setcoach_id: (state, action) => {
      state.coach_id = action.payload;
    },
    setseat_id: (state, action) => {
      state.seat_id = action.payload;
    },
    clearBookingData: (state) => {
      state.train_id = null;
      state.coach_id = null;
      state.seat_id = null;
    },
  },
});

export const { settrain_id, setcoach_id, setseat_id, clearBookingData } = bookingSlice.actions;
export default bookingSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const selectedSeatSlice = createSlice({
  name: 'selectedSeat',
  initialState: {
    train_id: null,
    coach_id: null,
    seat_id: null,
    user_id: null,
    total_amount: null,
    payment_id: null,
    train_name: null,
    coach_name: null,
    seat_number: null,
    username: null,
  },
  reducers: {
    setTrainId: (state, action) => {
      state.train_id = action.payload;
    },
    setCoachId: (state, action) => {
      state.coach_id = action.payload;
    },
    setSeatId: (state, action) => {
      state.seat_id = action.payload;
    },
    setUserId: (state, action) => {
      state.user_id = action.payload;
    },
    setTotalAmount: (state, action) => {
      state.total_amount = action.payload;
    },
    setPaymentId: (state, action) => {
      state.payment_id = action.payload;
    },
    setTrainName: (state, action) => {
      state.train_name = action.payload;
    },
    setCoachName: (state, action) => {
      state.coach_name = action.payload;
    },
    setSeatNumber: (state, action) => {
      state.seat_number = action.payload;
    },
    setUserName: (state, action) => {
      state.username = action.payload;
    },
    clearBookingData: (state) => {
      state.train_id = null;
      state.coach_id = null;
      state.seat_id = null;
      state.user_id = null;
      state.total_amount = null;
      state.payment_id = null;
      state.train_name = null;
      state.coach_name = null;
      state.seat_number = null;
      state.username = null;
    },
  },
});

export const {
  setTrainId,
  setCoachId,
  setSeatId,
  setUserId,
  setTotalAmount,
  setPaymentId,
  setTrainName,
  setCoachName,
  setSeatNumber,
  setUsername,
  clearBookingData,
} = selectedSeatSlice.actions;

export default selectedSeatSlice.reducer;

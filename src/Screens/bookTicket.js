import React, { useState, useEffect } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'typeface-poppins';
import '../Screens/CSS/book.css';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'; 
import { setTrainId,setCoachId,setSeatId,setTotalAmount,setTrainName,setCoachName,setSeatNumber,setUserName } from '../features/selectedSeatSlice';
function BookTicket() {
  const dispatch = useDispatch()
  const history = useHistory();
  const trainId = useSelector((state) => state.booking.train_id);
  console.log(trainId);
  const [selectedSeatIndex, setSelectedSeatIndex] = useState(null);
  const [seatsData, setSeatsData] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [trainName, setTrainName] = useState('');
  var [availStat, setAvailStat] = useState('');

  const toTicket = () => {
    if (selectedSeat) {     
      sessionStorage.setItem('selectedSeatData', JSON.stringify(selectedSeat));
      setSelectedSeat(null);
      setSelectedSeatIndex(null); // Reset selected seat index
      history.push('/payment');
    } else {
      toast.error('Please select a seat before booking.');
    }
  };

  const fetchSeatsData = async () => {
    try {
      const response = await fetch(`http://localhost:53331/api/SeatCollection/SeatCollections?trainId=${trainId}`);
      if (response.ok) {
        const data = await response.json();

        const cleanedData = data.map(seat => ({
          train_id: seat.train_id,
          seat_id: seat.seat_id,
          coach_id: seat.coach_id,
          train_name: seat.train_name,
          seat_number: seat.seat_number,
          coach_name: seat.coach_name,
          seat_availability: seat.availability.trim(),
          price: seat.price,
          selected: false
        }));
        console.log(cleanedData);
        setTrainName(cleanedData[0].train_name);
        setSeatsData(cleanedData);
      } else {
        console.error('Error fetching seats data');
      }
    } catch (error) {
      console.error('An error occurred while fetching seats data', error);
    }
  };

  const handleSeatClick = (seat, index) => {
    console.log(seat.seat_availability);
    if (seat.seat_availability =="true") {
      const selectedDiv = document.getElementById(`${seat.coach_id}_${seat.seat_id}`);
        console.log(selectedDiv);
        
        selectedDiv.classList.add('selected-seat');
      console.log(seat.seat_availability);
      if (selectedSeatIndex == index) {
       
        setSelectedSeatIndex(null);
        
        // setSelectedSeat(null); // Reset selected seat
      } 
    // else {
    //     const selectedDiv = document.getElementById(`${seat.coach_id}_${seat.seat_id}`);
    //     console.log(selectedDiv);
    //     if (selectedDiv) {
    //     selectedDiv.classList.add('selected-seat');
    //  }
    
        setSelectedSeatIndex(index);
        setSelectedSeat(seat); // Set selected seat
        selectedDiv.classList.remove('selected-seat');
      }
    
  };

  useEffect(() => {
    fetchSeatsData();
  }, [trainId]);

  return (
    <>
      <div className="header">
        <div>Train: {trainName}</div>
        <div>Selected Seat:{selectedSeat.seat_number}</div>
        <div>Price:{selectedSeat.price}</div>
      </div>
      <div>
        <center>
          <div className="seats-container">
          <div className="seat-item">
  {seatsData.map((seat, index) => (
    <button
      key={seat.coach_id + seat.seat_id}
      id={`${seat.coach_id}_${seat.seat_id}`}
      className={`btn ${seat.seat_availability.toLowerCase() == 'true' ? 'btn-outline-primary ' : 'btn-outline-danger'}`}
      onClick={() => handleSeatClick(seat, index)}
    >
      {seat.seat_number}
    </button>
  ))}
</div>

          </div>
        </center>
      </div>
      <div>
        <center>
          <button className="btn btn-primary button-34 btnn1" onClick={() => toTicket()}>
            Book
          </button>
        </center>
      </div>
    </>
  );
}

export default BookTicket;



















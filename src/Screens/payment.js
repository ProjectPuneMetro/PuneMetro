import React, { useState, useEffect } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'typeface-poppins';
import '../Screens/CSS/book.css';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setPaymentId } from '../features/selectedSeatSlice';
import '../Screens/CSS/creditCard.css';

function Payment() {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const history = useHistory(); // Use history for navigation
  
  const getRandomPaymentId = () => {
    return Math.floor(Math.random() * 10000);
  };
  const getRandomBookingId = () => {
    return Math.floor(Math.random() * 12300);
  };
  const bookingId=getRandomBookingId();
  sessionStorage.setItem('bookingId', bookingId);
  const selectedSeatData = JSON.parse(sessionStorage.getItem('selectedSeatData'));
  const userId = JSON.parse(sessionStorage.getItem('userId'));
  const { train_name, price, coach_name, seat_number } = selectedSeatData;
  const payId=getRandomPaymentId();
  const selectedSeatId=selectedSeatData.seat_id;
  const newdata={
    seat_id:selectedSeatData.seat_id,
    coach_id:selectedSeatData.coach_id,
    seat_number:selectedSeatData.seat_number,
    availability: 'false',
  }
  const changeAvailabilityStatus = async (seatId) => {
    // try {
    //   const url = `http://localhost:53331/api/Seats/101`;
    //   const newdata={
    //     seat_id:101,
    //     availability: 'false',
    //   }
    //   const response = await fetch(url, {
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
        
    //     body: JSON.stringify(newdata),
    //   });
  
    //   if (response.status === 201) {
    //     console.log('Seat availability updated successfully.');
    //   } else {
    //     console.log('Seat availability error successfully.');
    //     console.error('Failed to update seat availability.');
    //   }
    // } catch (error) {
    //   console.error('An error occurred while updating seat availability.', error);
    // }

    var helper = new XMLHttpRequest();
    helper.onreadystatechange = ()=>{
        //var result = JSON.parse(helper.responseText);
        //console.log(result);
    };
    helper.open("PUT", "http://localhost:53331/api/Seats/"+seatId);
    helper.setRequestHeader("Content-Type","application/json");
    helper.send(JSON.stringify(newdata));
  };
  
  const addToBook =async()=>{
    try {
      console.log("in else");
      
      const url = 'http://localhost:53331/api/bookedSeats';
      const body = {
        booking_id:bookingId,
        user_id:userId,    
        seat_id :selectedSeatData.seat_id,     
        coach_id :selectedSeatData.coach_id,    
        train_id :selectedSeatData.train_id,    
        total_amount:selectedSeatData.price, 
        payment_id :payId  
        
      };
      console.log(body);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
        console.log(response.status);
      if (response.status === 201) {
        toast.success('Ticket Booked');
        changeAvailabilityStatus(selectedSeatData.seat_id);


        history.push('/displayTicket'); 
      } else {
        toast.error('Booking Failed');
      }
    }
   catch (error) {
    toast.error('An error occurred, please try again later');
  }
  };
  const handlePayClick = async () => {
    try {
        console.log("in else");
        
        const url = 'http://localhost:53331/api/payments';
        const body = {
          payment_id:payId,
          amount: price,
          user_id: userId, 
          
        };
        console.log(body);
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
          console.log(response.status);
        if (response.status === 201) {
          toast.success('Payment Successful');
          addToBook();

          // history.push('/home'); 
        } else {
          toast.error('Payment Failed');
        }
      }
     catch (error) {
      toast.error('An error occurred, please try again later');
    }
  };
  return (
    <div className="container bg-light d-md-flex align-items-center">
      <div className="card box1 shadow-sm p-md-5 p-md-5 p-4">
        <div className="fw-bolder mb-4">
          <span className="fas fa-dollar-sign"></span>
          <span className="ps-1">Train Name :</span>
          <span className="ps-1">{selectedSeatData.train_name}</span>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center justify-content-between text mb-4">
            <span>Total</span>
            <span className="fas fa-dollar-sign">
            <span className="ps-1">{selectedSeatData.price}</span>
              
            </span>
          </div>
          <div className="border-bottom mb-4"></div>
          <div className="d-flex flex-column mb-4">
            <span className="far fa-file-alt text">
              <span className="ps-2">CoachName</span>
            </span>
            <span className="ps-3">{selectedSeatData.coach_name}</span>
          </div>
          <div className="d-flex flex-column mb-5">
            <span className="far fa-calendar-alt text">
              <span className="ps-2">Seat Number</span>
            </span>
            <span className="ps-3">{selectedSeatData.seat_number}</span>
          </div>
          <div className="d-flex align-items-center justify-content-between text mt-5">
            <div className="d-flex flex-column text">
              <span>Customer Support:</span>
              <span>online chat 24/7</span>
            </div>
            <div className="btn btn-primary rounded-circle">
              <span className="fas fa-comment-alt"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="card box2 shadow-sm">
        <div className="d-flex align-items-center justify-content-between p-md-5 p-4">
          <span className="h5 fw-bold m-0">Payment methods</span>
          <div className="btn btn-primary bar">
            <span className="fas fa-bars"></span>
          </div>
        </div>
        <ul className="nav nav-tabs mb-3 px-md-4 px-2">
          <li className="nav-item">
            <a className="nav-link px-2 active" aria-current="page" href="#">
              Credit Card
            </a>
          </li>
          
        </ul>
        <div className="px-md-5 px-4 mb-4 d-flex align-items-center">
          <div className="btn btn-success me-4">
            <span className="fas fa-plus"></span>
          </div>
          <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked />
           
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-column px-md-5 px-4 mb-4">
                <span>Credit Card</span>
                <div className="inputWithIcon">
                  <input className="form-control" type="text"  onChange={(e) => {
                  setCardNumber(e.target.value)
                }}  required/>
                 
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4">
                <span>Expiration Date</span>
                <div className="">
                  <input type="text" className="form-control"  onChange={(e) => {
                  setExpirationDate(e.target.value)
                }} required/>
                  <span className="fas fa-calendar-alt"></span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
                <span>Code CVV</span>
                <div className="inputWithIcon">
                  <input type="password" className="form-control"  onChange={(e) => {
                  setCvv(e.target.value)
                }} required/>
                  <span className="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex flex-column px-md-5 px-4 mb-4">
                <span>Name</span>
                <div className="inputWithIcon">
                  <input className="form-control text-uppercase" type="text"  onChange={(e) => {
                  setCardHolder(e.target.value) 
                }} required/>
                  <span className="far fa-user"></span>
                </div>
              </div>
            </div>
            <div className="col-12 px-md-5 px-4 mt-3">
              <button className="btn btn-primary fluid" onClick={handlePayClick}>Payment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

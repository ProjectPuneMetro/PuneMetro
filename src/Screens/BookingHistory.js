import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify'; 

function BookingHistory() {
  const [bookingHistory, setBookingHistory] = useState([]);
  const userName = sessionStorage.getItem('userName');
  const userId = sessionStorage.getItem('userId');
  const [ cancellationReq_id, setCancellationReq_id] = useState("");
  const [ booking_id, setBooking_id] = useState("");
  const [ status, setStatus] = useState("pending");
 
  
  
  function handleCancel(booking_id) {
   
    setCancellationReq_id (Math.floor(Math.random() * 5478));
    const url = `http://localhost:53331/api/CancellationReqs`;
    const selectedDiv = document.getElementById(booking_id);
    const body = {
      cancellationReq_id,
      booking_id,
      status
    }; 
    
    try {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then(response => {
          if (response.status === 201) {
            toast.success('Booking cancel request sent successfully');
            selectedDiv.classList.add('selected-cancel');
            selectedDiv.innerText='Pending';
            // You might want to update the booking history state here if needed
          } else {
            toast.error('Error canceling booking, please try again');
          }
        })
        .catch(error => {
          toast.error('An error occurred, please try again later');
        });
    } catch (error) {
      toast.error('An error occurred, please try again later');
    }
  }

  
   
  function fetchBookingHistoryForUser(userId) {
    const apiUrl = `http://localhost:53331/api/BookingHistory/BookingHistory?userId=${userId}`;
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setBookingHistory(data);
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  useEffect(() => {
    fetchBookingHistoryForUser(userId);
  }, [userId]);

  return (
    <>
      <head>
        <title>Booking History</title>
      </head>
      <h2 style={{ marginLeft: '1000px', marginTop: '30px', height: '38px', width: '100px', fontFamily: 'fantasy' }}>{userName}</h2>
      <center>
        <div style={{ flex: 1, padding: '20px'  }}>
          <table className='table table-bordered myTable'>
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Train Name</th>
                <th>Coach Name</th>
                <th>Seat Number</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              {bookingHistory.map((bh, index) => (
                <tr key={index}>
                  <td>{bh.booking_id}</td>
                  <td>{bh.train_name}</td>
                  <td>{bh.coach_name}</td>
                  <td>{bh.seat_number}</td>
                  <td>
                    <button className='btn btn-outline-warning' id={`${bh.booking_id}`}  onClick={() => handleCancel(bh.booking_id)}>Cancel</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </center>
    </>
  );
}

export default BookingHistory;

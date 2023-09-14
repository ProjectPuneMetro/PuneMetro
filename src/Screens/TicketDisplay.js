import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify'; 
import 'typeface-poppins';
import '../Screens/CSS/signup.css';

function TicketDisplay(){
    const [ticket, setTicket] = useState([]);
    const [ticketDetails, setTicketDetails] = useState([]);
    const bookingId=sessionStorage.getItem('bookingId');
    console.log(bookingId);
    const addToBook =async()=>{
        fetch(`http://localhost:53331/api/bookedSeats/${bookingId}`)
        .then(response => response.json())
        .then(data => {
          setTicket(data);
          fetchedTicketDetails();
          

          console.log("ticket");
          console.log(ticket);
        })
        .catch(error => {
          console.error('Error fetching train data:', error);
        });
        
      };
      const fetchedTicketDetails =async()=>{
        fetch(`http://localhost:53331/api/DisplayTickets/DisplayTicket?bookingId=${bookingId}
        `)
        .then(response => response.json())
        .then(data => {
          setTicketDetails(data);
          // sessionStorage.clear();
          console.log(data);
        })
        .catch(error => {
          console.error('Error fetching train data:', error);
        });
        
      };
      useEffect(() => {
        addToBook();
       }, []);
     
    return (
        <div className='container'>
            
            <center>
                <div style={{ marginLeft:'200px' ,display:'inline-block'}}>
              <h3 style={{ fontSize: '35px', color: '#5E5DF0',fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}> Ticket Id:{ticketDetails.booking_id}</h3>
              <div  style={{ display:'flex'}}>
                <div >
                    <h1>Source</h1>
                    <h1>{ticketDetails.source_station}</h1>
                </div>
                <div>
                    <h1>Destination</h1>
                    <h1>{ticketDetails.destination_station}</h1>
                </div>
              </div>
              
              <div>
                <h2>{ticketDetails.user_name}</h2>
              </div>
              <div>
                <h2>Metro Name:{ticketDetails.train_name}</h2>
                <h2>
                    Coach Name:{ticketDetails.coach_name}
                </h2>
                <h2>
                    Seat Number:{ticketDetails.seat_number}
                </h2>
              </div>
              </div>
            </center>
        </div>
        
      );
}
export default TicketDisplay;
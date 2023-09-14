import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { useHistory } from 'react-router-dom';
import './CSS/selectTrain.css';

function SelectTrain() {
  const history = useHistory();

  const ToBookSeat = () => {
    history.push('/book');
  };

  return (
    <div className="container conClass" id="conClass">
      <br />
      <br />
      <br />
      <center>
        <h2 style={{ color: 'black', fontFamily: 'Poppins, sans-serif' }}>PLAN YOUR JOURNEY</h2>
        <h4 style={{ color: 'black', paddingRight: '250px', fontFamily: 'Poppins, sans-serif' }}>From</h4>
        <input type="text" id="from" name="from" placeholder="From" style={{ width: '300px', fontFamily: 'Poppins, sans-serif' }} required /><br />
        <h4 style={{ color: 'black', paddingRight: '280px', fontFamily: 'Poppins, sans-serif' }}>To</h4>
        <input type="text" id="To" name="To" placeholder="To" style={{ width: '300px', fontFamily: 'Poppins, sans-serif' }} required /><br /><br />
        <label style={{ paddingRight: '20px', fontFamily: 'Poppins, sans-serif' }}>Date</label>
        <input type="date" id="expiryDate" name="expiryDate" required /><br /><br />
        <label style={{ paddingRight: '20px', fontFamily: 'Poppins, sans-serif' }}>Time</label>
        <input type="time" id="Time" name="Time" required /><br /><br />
        <input type="submit" value="Book Trains" onClick={ToBookSeat} className="button-34" style={{width
        :'100px'}} />
        <br />
      </center>
    </div>
  );
}

export default SelectTrain;

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './CSS/ShowTrains.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from 'react-redux';
import { settrain_id as setTrainId } from '../features/bookingSlice';
function ShowTrains() {
  const dispatch = useDispatch()
  const history = useHistory();
  const [trains, setTrains] = useState([]);

  const showTrain = () => {
    fetch('http://localhost:53331/api/trains')
      .then(response => response.json())
      .then(data => {
        setTrains(data);
      })
      .catch(error => {
        console.error('Error fetching train data:', error);
      });
  };

  useEffect(() => {
    showTrain();
  }, []);

  const toBookSeat = (trainId) => {
    console.log(trainId);
      dispatch(setTrainId(trainId));
    
    history.push('/book');
  };

  return (
    <div className="container">
      {trains.map(train => (
        <div className='col-md-3'>
        <table key={train.train_id} className="table table-bordered ">
          <tbody>
            <tr>
              <td>
                <h3 className="source-station">{train.train_name}</h3>
              </td>
              <td>
                <h6 className="departure-time">{train.departure_time}</h6>
              </td>
            </tr>
            {/* <tr>
              <td>
                <h6 className="travel-time">{train.travel_time} min</h6>
              </td>
              <td>
                <h6 className="platform">Platform no.{train.platform}</h6>
              </td>
            </tr> */}
            <tr>
              <td colSpan="2">
                <h5 className="show-stations">{train.source_station} - {train.destination_station}</h5>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <h3 className="destination-station">{train.destination_station}</h3>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <center>
                  <button className="button-34" onClick={() => toBookSeat(train.train_id)}>
                    Book
                  </button>
                </center>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      ))}
    </div>
  );
}

export default ShowTrains;

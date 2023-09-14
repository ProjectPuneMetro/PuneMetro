import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Admin() {
  const [trainData, setTrainData] = useState({
    train_id: "",
    train_name: "",
    source_station: "",
    destination_station: "",
    arrival_time: "",
    departure_time: "",
  });
  const history = useHistory();
  const [trains, setTrains] = useState([]);
  const [canReq, setcanReq] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  
  const onClear = () => {
    setTrainData({  train_id: "",
                    train_name: "",
                    source_station: "",
                    destination_station: "",
                    arrival_time: "",
                    departure_time: ""});
  };

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          setError("Train added successfully");
          history.push("/Admin");
        } else {
          setError("Error adding train");
        }
      }
    };

    xhr.open("POST", "http://localhost:53331/api/Trains");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(trainData));
  };

  const select = () =>{ var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
            if (helper.readyState == 4 && 
                helper.status == 200 )
                {
                    // debugger;
                    var result = 
                        JSON.parse(helper.responseText);
                    var receivedTrainData = result;
                    console.log("Inside Select Query")
                    // debugger;
                    setTrains(receivedTrainData);
                }
        };
        helper.open("GET", "http://localhost:53331/api/Trains");
        helper.send();}

        useEffect(()=>{console.log("Inside use effect")
                      select()},[])
        useEffect(()=>{console.log("Inside use effect")
                  cancelReq()},[])

        
        const deleteTrain =(train_id)=>{
                // debugger;
              var helper = new XMLHttpRequest();
              helper.onreadystatechange = ()=>{
                  if(helper.readyState == 4 &&
                      helper.status == 200)
                      {   
                            debugger;
                          var responseReceived = 
                              JSON.parse(helper.responseText);
                          
                            setMessage("Delete Successfull!")
                            select();
                         
                      }
              };
              helper.open("DELETE", 
                              "http://localhost:53331/api/Trains/"+train_id);
              helper.send();   
        };

      const editTrain = (train_id)=>{
        // debugger;
        console.log("You need to find record with train_id = " + train_id + " from - ");

        console.log(trains)


        trains.map((trainToEdit)=>{
            if(trainToEdit.train_id == train_id)
            {
                setMessage("Record Found!!")
                var copyOfTrainToEditFromArray  =
                   {...trainToEdit} 
                setTrainData(copyOfTrainToEditFromArray);
                return;
            }
        })
      }
        const updateTrain =(train_id)=>{
          debugger;
          var helper = new XMLHttpRequest();
          helper.onreadystatechange = ()=>{
              if(helper.readyState == 4 &&
                  helper.status == 200)
                  {
                    debugger;
                    console.log ("actual data "+helper.responseText)
                      var responseReceived = 
                          JSON.parse(helper.responseText);
                          debugger;
                          console.log("In 200")
                      if(responseReceived.affectedRows!=undefined && responseReceived.affectedRows>0)
                      { 
                        console.log("In 300")
                          setMessage("Update Successful !")
                          select();
                          setTrainData({  train_id: "",
                                          train_name: "",
                                          source_station: "",
                                          destination_station: "",
                                          arrival_time: "",
                                          departure_time: "",});
                      }
                      else
                      {
                          //this.setMessage("Something went wrong! while updating")
                          setMessage("Update Successful !")
                          select();
                          setTrainData({  train_id: "",
                                          train_name: "",
                                          source_station: "",
                                          destination_station: "",
                                          arrival_time: "",
                                          departure_time: "",});
                          
                      }
                  }
                  else{
                  console.log(helper.readyState)
                  console.log(helper.status)
                  setMessage("Update Successful !")
                          select();
                          setTrainData({  train_id: "",
                                          train_name: "",
                                          source_station: "",
                                          destination_station: "",
                                          arrival_time: "",
                                          departure_time: "",});}
          };
          helper.open("PUT","http://localhost:53331/api/Trains/"+ trainData.train_id);
          helper.setRequestHeader("Content-Type", "application/json")
          helper.send(JSON.stringify(trainData)); 

        };
        
  const cancelReq = () =>{ var helper = new XMLHttpRequest();
    helper.onreadystatechange = ()=>{
        if (helper.readyState == 4 && 
            helper.status == 200 )
            {
                // debugger;
                var result = 
                    JSON.parse(helper.responseText);
                var receivedData = result;
                console.log("Inside Select Query")
                // debugger;
                setcanReq(receivedData);
            }
    };
    helper.open("GET", "http://localhost:53331/api/CancellationReqs");
    helper.send();}
        const getRandomTrainId = () => {
          return Math.floor(Math.random() * 10000);
        };

const insert=()=>
    {
        // // this.state.empToBeAdded .. hold record's data
        // // to be send to Node Server!
        debugger;
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
            if(helper.readyState == 4 &&
                helper.status == 200)
                {
                    var responseReceived = 
                        JSON.parse(helper.responseText);
                    if(responseReceived.affectedRows!=undefined && responseReceived.affectedRows>0)
                    {
                        setMessage("Insert Successful !")
                        select();
                        setTrainData({
                                train_name: "",
                                source_station: "",
                                destination_station: "",
                                arrival_time: "",
                                departure_time: ""});
                    }
                    else
                    {
                        setMessage("Something went wrong!")
                    }
                }else{
                console.log(helper.readyState)
                console.log(helper.status)
                setMessage("Insert Successful !")
                select();
                setTrainData({
                        train_name: "",
                        source_station: "",
                        destination_station: "",
                        arrival_time: "",
                        departure_time: ""});
              }
        };
        const trainData1={
          train_id:getRandomTrainId() ,
          train_name: trainData.train_name,
          source_station:trainData.source_station,
          destination_station: trainData.destination_station,
          arrival_time: trainData.arrival_time,
          departure_time: trainData.departure_time,
        };
        helper.open("POST","http://localhost:53331/api/Trains");
        helper.setRequestHeader("Content-Type", "application/json")
        helper.send(JSON.stringify(trainData1));   
    
    }
        const onTextChange =(args)=>{
          //debugger;
            console.log("In textchange");
            var copyOfTrain = {...trainData};
            copyOfTrain[args.target.name] = args.target.value;
            setTrainData(copyOfTrain);

            
        };



    

        return (
          <>
            <div className="wrapper" style={{ fontFamily: 'Poppins, sans-serif', display: 'flex', marginTop: '-150px' }}>
              {/* Left Half - Form */}
              <div style={{ flex: 1, padding: '20px' ,marginLeft:'-400px',width:'30%',marginTop:'200px'}}>
                <div id="wizard" style={{ width:'600px'}}>
                  <div className="center-content">
                    <h2>Add Train</h2>
                  </div>
                  <section center-content>
                  <div className="form-row">
              <input
                type="hidden"
                className="form-control "
                placeholder="Train Id"
                name="train_id"
                value={trainData.train_id}
                onChange={onTextChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                className="form-control"
                placeholder="Train Name"
                name="train_name"
                value={trainData.train_name}
                onChange={onTextChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                className="form-control"
                placeholder="Source Station"
                name="source_station"
                value={trainData.source_station}
                onChange={onTextChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                className="form-control"
                placeholder="Destination Station"
                name="destination_station"
                value={trainData.destination_station}
                onChange={onTextChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                className="form-control"
                placeholder="Arrival Time"
                name="arrival_time"
                value={trainData.arrival_time}
                onChange={onTextChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                className="form-control"
                placeholder="Departure Time"
                name="departure_time"
                value={trainData.departure_time}
                onChange={onTextChange}
                required
              />
            </div>
                    <button className="btn btn-outline-success" style={{ marginTop: '10px' }} type="submit" onClick={insert}>
                      Add Train
                    </button> &nbsp; &nbsp;
                    <button className="btn btn-outline-warning" style={{ marginTop: '10px' }} type="submit" onClick={updateTrain}>
                      Update Train
                    </button> &nbsp; &nbsp;
                    <button className="btn btn-outline-info" style={{ marginTop: '10px' }} onClick={onClear}>
                      Clear
                    </button>
                  </section>
                </div>
                <div className='mytable alert alert-warning'>
                  <h1> {message}</h1>
                </div>
              </div>
      
              {/* Right Half - Table */}
              <div style={{ flex: 1, padding: '20px', marginLeft:'400px' ,marginTop:'200px'}}>
                <table className='table table-bordered myTable'>
                
                  <tbody>
                    {trains.map((train) => (
                      <tr key={train.train_id}>
                        <td>
                          {train.train_id}
                        </td>
                        <td>
                          {train.train_name}
                        </td>
                        <td>
                          <button className='btn btn-outline-warning' onClick={() => { deleteTrain(train.train_id) }}>Delete</button>
                        </td>
                        <td>
                          <button className='btn btn-outline-info' onClick={() => { editTrain(train.train_id) }}>Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <table className='table table-bordered myTable'>
                  <tbody>
                    <tr>
                      <th>Req ID</th>
                      <th>booking ID</th>
                      <th>Status</th>
                    </tr>
                    {canReq.map((req) => (
                      <tr key={req.cancellationReq_id}>
                         <td>
                          {req.cancellationReq_id}
                        </td>
                        <td>
                          {req.booking_id}
                        </td>
                        <td>
                          {req.status}
                        </td>
                        <td>
                          <button className='btn btn-outline-warning' >Approve</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );
      }
      
      export default Admin;
 
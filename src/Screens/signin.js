import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../Screens/CSS/signin.css';
import { useHistory } from 'react-router-dom';
import { useState } from "react";



function SignIn() {
  // debugger;
    const history = useHistory();
    const ToSignup = () => {
        history.push('/signup');
      };

      const [message, setMessage]= useState("");
      const [login, setLogin] = useState({email : " ",
                                          Password : " ",});
     
      const [userData, setUserData] = useState({
                                                user_id : "",
                                                user_name : "",
                                                user_email : "",
                                                password : "",
                                                contact_number : "",    
                                                });

      


      const INSERT = ()=>{
        // debugger;
          var helper = new XMLHttpRequest();
          helper.onreadystatechange = ()=>{
            if(helper.readyState == 4 && helper.status == 200)
            {
              debugger;
              var result = JSON.parse(helper.responseText);
                setMessage("Insert Successfully")
                setUserData(result);
                console.log(result.user_name);
                sessionStorage.setItem('userName', result.user_name);
                sessionStorage.setItem('userId', result.user_id);
                sessionStorage.setItem("userData", userData);
                sessionStorage.setItem("isLoggedIn", true);
                history.push('/home');
                window.location.reload();
              
            }
            else
            {
              setMessage("Something Went Wrong");
            }
          };
          helper.open("POST", "http://localhost:53331/api/Login/SignIn");
          helper.setRequestHeader("Content-Type", "application/json");
          helper.send(JSON.stringify(login));
      };

      const onTextChange = (args)=>{
        var copyOfUser = {...login};
        copyOfUser[args.target.name] = args.target.value;
        setLogin(copyOfUser);
      };


  return (
    <div className="back" style={{ textAlign: 'center' , marginTop: '-5vh'}}>
      <div className="in">
        <center>
          <h1  style={{ fontSize: '40px',paddingTop:'40px', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>Sign In</h1>

          <input className="input" type="email" name='email' placeholder="Email" onChange={onTextChange} required />

          <input className="input" type="password" name='password' placeholder="Password" onChange={onTextChange} required />
          <br />

          <button className="button" onClick={INSERT}>Submit</button>
          <br />
          <br />
          <center>
            <a href="" onClick={ToSignup} style={{ color: 'white' }}>
              Create account
            </a>
          </center>
        </center>
      </div>
      <div className='mytable alert alert-warning'>
        <h1> {message}</h1>
      </div>
    </div>
  );
}

export default SignIn;
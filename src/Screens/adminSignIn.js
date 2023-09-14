import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../Screens/CSS/signin.css';
import { useHistory } from 'react-router-dom';

function AdminSignIn() {
  const history = useHistory();
  
  const [message, setMessage] = useState("");
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const onTextChange = (event) => {
    const { name, value } = event.target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  };

  const compareCredentials = () => {
    if (login.email === "admin@gmail.com" && login.password === "admin") {
      setMessage("Logged in successfully!");
      sessionStorage.setItem('userName', 'Admin'); // Store username for admin
      sessionStorage.setItem('userId', 'admin'); // Store user ID for admin
      history.push('/admin'); // Redirect to admin dashboard or desired page
    } else {
      setMessage("Invalid email or password");
    }
  };

  const ToSignup = () => {
    history.push('/admin');
  };

  return (
    <div className="backAdmin" style={{ textAlign: 'center', marginTop: '-5vh' }}>
      <div className="in">
        <center>
          <h1 style={{ fontSize: '40px', paddingTop: '40px', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>Sign In</h1>
          <input className="input" type="email" name='email' placeholder="Email" onChange={onTextChange} required />
          <input className="input" type="password" name='password' placeholder="Password" onChange={onTextChange} required />
          <br />
          <button className="button" onClick={compareCredentials}>Submit</button>
          <br />
          <br />
        
        </center>
      </div>
      <div className='mytable alert alert-warning'>
        <h1> {message}</h1>
      </div>
    </div>
  );
}

export default AdminSignIn;

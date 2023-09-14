import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify'; 
import { Link } from 'react-router-dom';
import '../Screens/CSS/signup.css';

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loggedInUserData, setLoggedInUserData] = useState(null); // Assume you have user data from login

//   useEffect(() => {
//     setName(loggedInUserData.user_name);
//     setEmail(loggedInUserData.user_email);
//     setMobile(loggedInUserData.contact_number);
//   }, [loggedInUserData]);

  const updateProfile = async () => {
    if (password !== confirmPassword) {
      toast.error('Password does not match');
      return;
    }

    const url = `http://localhost:53331/api/users/${loggedInUserData.user_id}`; // Adjust the URL and user ID as needed

    const updatedUserData = {
      user_name: name,
      user_email: email,
      password: password,
      contact_number: mobile,
    };

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUserData),
      });

      if (response.status === 200) {
        toast.success('Profile updated successfully');
      } else {
        toast.error('Error updating profile, please try again');
      }
    } catch (error) {
      toast.error('An error occurred while updating profile, please try again later');
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: 10 }}>Update Profile</h1>

      <div className='form'>
        <div className='mb-3'>
          <label>Name</label>
          <input
            type='text'
            className='form-control'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label>Email</label>
          <input
            type='text'
            className='form-control'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label>Mobile Number</label>
          <input
            type='tel'
            className='form-control'
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label>Password</label>
          <input
            type='password'
            className='form-control'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label>Confirm Password</label>
          <input
            type='password'
            className='form-control'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        
        <div className='mb-3'>
          Already got an account? <Link to='/'>Login here</Link>
        </div>

        <button onClick={updateProfile} className='btn btn-primary'>
          Update Profile
        </button>
      </div>
    </div>
  );
}

export default SignUp;

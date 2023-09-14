import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify'; 
import { Link } from 'react-router-dom';
import '../Screens/CSS/signup.css';
import validation from '../Global/validations';


function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();
  const [error, setError] = useState("");
  const { validateEmail, validatePassword } = validation();
  const getRandomUserId = () => {
    return Math.floor(Math.random() * 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 5000);
  }, [error]);

 

  const registerUser = async () => {
    if (name.length == '') {
      toast.error('Please enter first name')
    }  else if (!validateEmail(email)) {
      toast.error('Please enter valid email')
    } else if (mobile.length == '' || mobile.length!=10) {
      toast.error('Enter Mobile Number in proper format')
    } else if (!validatePassword(password)) {
      toast.error('Please Enter Password in proper format')
    } else if (confirmPassword.length == '') {
      toast.error('Please confirm password')
    } else if (password !== confirmPassword) {
      toast.error('Password does not match')
    } else {
    
    const url = 'http://localhost:53331/api/users';
    const userId = getRandomUserId();
    const body = {
      user_id: userId,
      user_name: name,
      user_email: email,
      password: password,
      contact_number: mobile,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (response.status === 201) {
        toast.success('Successfully registered a new user');
        history.push('/newsignin');
      } else {
        toast.error('Error while registering a new user, please try again');
      }
    } catch (error) {
      toast.error('An error occurred, please try again later');
    }
  }
  };
  
  
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: 10 }}>Register User</h1>

      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>
            

            <div className='mb-3'>
              <label htmlFor=''> Name</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Mobile Number</label>
              <input
                type='tel'
                className='form-control'
                onChange={(e) => {
                  setMobile(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Password</label>
              <input
                type='password'
                className='form-control'
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Confirm Password</label>
              <input
                type='password'
                className='form-control'
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <div className='mb-3'>
                Already got an account? <Link to='/'>Login here</Link>
              </div>
              <button onClick={registerUser} className='btn btn-success'>
                Register
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </div>
  );
}

export default SignUp;

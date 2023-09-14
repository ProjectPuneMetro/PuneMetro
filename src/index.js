import React from 'react';
import ReactDOM from 'react-dom/client';
import Controller from './Screens';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Screens/navbar';
import { ToastContainer } from 'react-toastify';
// import SignIn from './Screens/signin';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import { store } from './store'
import SignIn from './Screens/signin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar></Navbar>
  <Provider store={store}>
 <Controller>
  
 </Controller>
 </Provider>
 <ToastContainer />
 </BrowserRouter>
);


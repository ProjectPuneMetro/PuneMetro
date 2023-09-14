import React from "react";
import { BrowserRouter, Route, Switch, Redirect, useParams } from "react-router-dom";
import Home from "./home";
import SignIn from "./newsignin";
import SignUp from "./signup";
import Payment from "./payment";
import ShowTrains from "./showtrains";
import selectTrain from "./selecttrain";
// import Ticket from "./ticket";
import ContactUs from "./contact";
import Network from "./network";
import EditProfile from "./editprofile";
import BookTicket from "./bookTicket";
import Admin from "./Admin";
import BookingHistory from "./BookingHistory";
import TicketDisplay from "./TicketDisplay";
import AdminSignIn from "./adminSignIn";
function Controller() {
  const isLoggedIn= sessionStorage.getItem('isLoggedIn');

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/newsignin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/adminlogin" component={AdminSignIn} />
        <Route exact path="/newsignin" component={SignIn} />
        <Route exact path="/admin" component={Admin} />
        
        <Route exact path="/showtrains" component={ShowTrains} />
        {/* <Route exact path="/selecttrain" component={selectTrain} /> */}
      
        <Route exact path="/network" component={Network} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/editprofile" component={EditProfile} />
            <Route exact path="/book" component={BookTicket} />
            {/* <Route exact path="/Admin" component={Admin} /> */}
            <Route exact path="/BookingHistory" component={BookingHistory} />
            <Route exact path="/payment" component={Payment} />
            {/* <Route exact path="/ticket" component={Ticket} /> */}
           <Route exact path="/displayticket" component={TicketDisplay} />
        
        { isLoggedIn =='true'? (
          <>
            <Route exact path="/editprofile" component={EditProfile} />
            <Route exact path="/book" component={BookTicket} />
            {/* <Route exact path="/Admin" component={Admin} /> */}
            <Route exact path="/BookingHistory" component={BookingHistory} />
            <Route exact path="/payment" component={Payment} />
            {/* <Route exact path="/ticket" component={Ticket} /> */}
           <Route exact path="/displayticket" component={TicketDisplay} />
           

          </>
        ) : (
          <>
            <Redirect from="/editprofile" to="/signin" />
            <Redirect from="/book" to="/signin" />
            
            <Redirect from="/BookingHistory" to="/signin" />
          </>
        )}
        
        {/* Add more routes as needed */}
      </Switch>
    </BrowserRouter>
  );
}

export default Controller;

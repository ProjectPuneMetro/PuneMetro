import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { useHistory} from 'react-router-dom';

function Navbar() {
  const logoSrc = "https://drive.google.com/uc?id=1-K4qi7rN42OF0596nSWDv6WMv7XL-IB0";
  const history = useHistory();
  const userId = sessionStorage.getItem('userId');
  // const [loggedIn, setLoggedIn] = useState(userId !== null);
  const handleRefresh = () => {
    window.location.reload();
  };

  const ToHome = () => {
    history.push('/home');
  };

  const ToSignin = () => {
    history.push('/signin');
    handleRefresh();
  };

 

  const ToAbout = () => {
    history.push('/home#about');
  };
  const ToEdit = () => {
    history.push('/editProfile');
  };
  const ToContact = () => {
    history.push('/contact');
  };
  const ToNetwork = () => {
    history.push('/network');
  };
  const ToLogout = () => {
    history.push('/home');
  };
  const ToBookingHistory = () => {
    history.push('/bookingHistory');
  };
  const handleLogout = () => {
    // sessionStorage.setItem('userId', null); 
    // sessionStorage.setItem('userName', null); 
    sessionStorage.clear();
    history.push('/home'); 
    handleRefresh();
  };

  return (
    <>
      <header className="header-area sticky-top" style={{ backgroundColor: 'white', height:'100px',boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <a href="" className="navbar-brand">
              <img src={logoSrc} alt="" style={{ width: '80px', height: '80px',marginTop:'-40px'}} />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto" style={{ fontSize: '20px',marginTop:'-40px',fontFamily: 'Poppins, sans-serif'}}>
                <li className="nav-item" style={{ paddingLeft:'20px'}}>
                  <a href="#top" onClick={ToHome} className="nav-link" style={{ fontFamily: 'Poppins, sans-serif'}}>
                    Home
                  </a>
                </li>
                <li className="nav-item" onClick={ToAbout} style={{ paddingLeft:'20px'}}>
                  <a href="#about" className="nav-link" style={{ fontFamily: 'Poppins, sans-serif'}}>
                    About
                  </a>
                </li>
                {/* <li className="nav-item" onClick={ToSignin} style={{ paddingLeft:'20px'}}>
                  <a href="" className="nav-link" style={{ fontFamily: 'Poppins, sans-serif'}}>
                    Sign In
                  </a>
                </li> */}
                <li className="nav-item" style={{ paddingLeft:'20px'}}>
                  <a href="" className="nav-link" onClick={ToNetwork} style={{ fontFamily: 'Poppins, sans-serif'}}>
                    Network
                  </a>
                </li>
                {/* <li className="nav-item" style={{ paddingLeft:'20px'}}>
                  <a href="" className="nav-link" style={{ fontFamily: 'Poppins, sans-serif'}}>
                    Routes
                  </a>
                </li> */}
                <li className="nav-item" style={{ paddingLeft:'20px'}}>
                  <a href="#contact" className="nav-link" onClick={ToContact} style={{ fontFamily: 'Poppins, sans-serif'}}>
                    Contact
                  </a>
                </li>
                {!sessionStorage.getItem('userId') || sessionStorage.getItem('userId') =='null' ? (
                  // Render logout button when user is logged in
                  <li className="nav-item" style={{ paddingLeft:'20px'}}>
                    <a href="" className="nav-link" onClick={ToSignin} style={{ fontFamily: 'Poppins, sans-serif'}}>
                      Sign In
                    </a>
                  </li>
                 
                ) : (
                  // Render sign-in button when user is not logged in
                  <>
                  <li className="nav-item" style={{ paddingLeft:'20px'}}>
                  <a  href=""className="nav-link btn btn-link" onClick={ToBookingHistory} style={{ fontFamily: 'Poppins, sans-serif', color: 'red', textDecoration: 'underline', cursor: 'pointer' }}>
                    Booking History
                  </a>
                </li>
                   <li className="nav-item" style={{ paddingLeft:'20px'}}>
                    <a  href=""className="nav-link btn btn-link" onClick={handleLogout} style={{ fontFamily: 'Poppins, sans-serif', color: 'red', textDecoration: 'underline', cursor: 'pointer' }}>
                      Logout
                    </a>
                  </li>
                  </>
                )}
              </ul>
              {/* <button type="button" className="btn btn-outline-info" style={{ fontSize: '20px',marginTop:'-40px',marginLeft:'250px'}}onClick={ToSelectTrain}>Book Trains</button> */}
              <div className="dropdown">
                {/* <input type='image' src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className=" dropdown-toggle rounded-circle"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" style={{ width:'90px',marginTop:'-40px',marginLeft:'50px'}} aria-expanded="false"> </input> */}

                {/* <a  ><img className=" dropdown-toggle rounded-circle"  style={{ width:'50px',marginTop:'-40px',marginLeft:'50px'}}id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" src='https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'></img></a> */}
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a className="dropdown-item" href="" onClick={ToEdit}>Edit Profile</a>
      <a className="dropdown-item" href="" onClick={ToLogout}>Logout</a>
    </div>
  </div>

            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;

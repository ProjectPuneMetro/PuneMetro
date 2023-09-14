import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'typeface-poppins';
import { useHistory } from 'react-router-dom';
function Home() {
  const logoSrc = "https://drive.google.com/uc?id=1-K4qi7rN42OF0596nSWDv6WMv7XL-IB0";
  const aboutDecImage = "https://drive.google.com/uc?id=1gCNAkNgQmwxSX5RzCBUcpjk8PvAbWFej";
  const history = useHistory();
  sessionStorage.setItem("isLoggedIn",false);
    const ToShowTrains = () => {
        history.push('/showtrains');
    };

  return (
    <>
      <div id='home' style={{ minHeight: '100vh' }}>
        <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-6 align-self-center">
                    <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                      <div className="row" style={{ paddingLeft: '50px' }}>
                        <div className="col-lg-12">
                          <h6 style={{ fontSize: '20px', paddingLeft: '10px', color: '#5E5DF0', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>EFFICIENCY, SUSTAINABILITY, AND PROGRESS IN MOTION</h6>
                          <br />
                          <h2 style={{ fontSize: '45px', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>Transforming Travel, Empowering Pune</h2>
                          <br />
                          <p style={{ fontSize: '15px', color: 'grey', fontFamily: 'Poppins, sans-serif' }}>Redefining Urban Transportation. Seamlessly connecting diverse landscapes, our advanced metro system unlocks Pune's true potential. Enjoy unmatched comfort, reliability, and sustainability, paving the way for a brighter future of mobility</p>
                          <div className="border-first-button scroll-to-section">
                            <button type="button" className="btn btn-outline-info" style={{ height: '45px', width: '90px',  fontSize: '15px' }} onClick={ToShowTrains}>Book Trains</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="right-image" data-wow-duration="1s" data-wow-delay="0.5s">
                      <img src={logoSrc} height="550px" style={{ marginTop: '-5vh', marginLeft: '100px', maxWidth: '100%' }} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="about section" style={{ marginTop: '-7vh', minHeight: '100vh' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-left-image wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
                <img src={aboutDecImage} height="500px" style={{ maxWidth: '100%' }} alt="" />
              </div>
            </div>
            <div className="col-lg-6 align-self-center wow fadeInRight" style={{ paddingLeft: '100px' }} data-wow-duration="1s" data-wow-delay="0.5s">
              <div className="about-right-content">
                <h6 style={{ fontSize: '20px', color: 'black', fontFamily: 'Poppins, sans-serif' }}>About Us</h6>
                <h4 style={{ fontSize: '20px', color: '#5E5DF0'
                , fontFamily: 'Poppins, sans-serif' }}><em>Pune Metro</em></h4>
                <div className="line-dec"></div>
                <p style={{ fontSize: '15px', color: 'grey', fontFamily: 'Poppins, sans-serif' }}>
                  Pune, the cultural and historical capital of the state of Maharashtra, known as the 'Queen of Deccan' due to its scenic beauty and rich natural resources.
                  The birthplace of the holy saint Tukaram, the capital of the greatest warrior king of all time Chhatrapati Shivaji Maharaj who established "Hindavi Swarajya," social reformers Mahatma Jyotiba Phule, Savitribai Phule, Maharshi Karve, home of great freedom fighters like Bal Gangadhar Tilak, Agarkar, and Gopal Krishna Gokhale.
                  <br />
                  In the last decades, the city witnessed a rise in population and people migrating from different parts of the country for job opportunities. However, the sustainable infrastructure to facilitate easy commute for the citizens was missing. The average travel time for citizens using public transport in Pune is over ~100 mins a day. This makes more and more citizens use their personal vehicles, which causes traffic chaos and congestion issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

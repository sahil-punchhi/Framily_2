import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';

import './Home.css';
import introVideo from '../../assets/video/framily.mp4';
import { Link } from 'react-router-dom';

function Home() {
  // Intro effect
  // useEffect(() => {
  //   document.getElementById('buttons__cont').style.visibility = 'hidden';
  //   setTimeout(function () {
  //     document.getElementById('bgvid1').style.display = 'none';
  //     document.getElementById('buttons__cont').style.visibility = 'visible';
  //   }, 7800);
  // }, []);
  return (
    <div className="home__container">
      {/* Uncomment for animation */}
      {/* <video playsInline autoPlay muted loop id="bgvid1">
        <source src={introVideo} type="video/mp4" />
      </video> */}
      <video playsInline autoPlay muted loop id="bgvid2">
        <source src={introVideo} type="video/mp4" />
      </video>
      <div className="home__buttons__container" id="buttons__cont">
        <Link to="/signup">
          <Button
            size="large"
            className="header__button"
            variant="outlined"
            color="primary"
          >
            Join Now
          </Button>
        </Link>
        <Link to="/">
          <Button
            size="large"
            className="header__button"
            variant="outlined"
            color="secondary"
          >
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

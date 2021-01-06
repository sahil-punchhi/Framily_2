import React from 'react';
import { useSelector } from 'react-redux';

import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import './Header.css';
import { Link } from 'react-router-dom';

const renderSignupButtons = () => {
  return (
    <div className="header__right">
      <Link to="/signin">
        <Button className="header__button" variant="outlined" color="primary">
          Sign in
        </Button>
      </Link>
      <Link to="/signup">
        <Button className="header__button" variant="outlined" color="secondary">
          Sign up
        </Button>
      </Link>
    </div>
  );
};

const renderLoggedInIcons = () => {
  return (
    <div className="header__right">
      <IconButton>
        <FavoriteIcon fontSize="large" className="heart__icon" />
      </IconButton>
      <IconButton>
        <PersonIcon fontSize="large" className="account__icon" />
      </IconButton>
    </div>
  );
};

function Header() {
  const authState = useSelector((state) => state.authentication);
  const { isAuthenticated } = authState;

  return (
    <div className="header">
      <h1 className="header__brand">Framily</h1>
      {isAuthenticated & isAuthenticated
        ? renderLoggedInIcons()
        : renderSignupButtons()}
    </div>
  );
}

export default Header;

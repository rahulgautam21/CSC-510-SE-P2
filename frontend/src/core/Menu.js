import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {signout, isAuthenticated} from '../auth/helper';

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return {color: 'red'};
  } else {
    return {color: '#FFFFFF'};
  }
};

const Menu = ({history}) => (
  <div>
    <ul className="nav nav-tabs bg-dark">
      <li className="nav-item">
        <Link style={currentTab(history, '/')} className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, '/aboutus')} className="nav-link" to="/aboutus">
          About Us
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, '/contactus')} className="nav-link" to="/contactus">
          Contact Us
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, '/cart')}
          className="nav-link"
          to="/cart"
        >
          Cart
        </Link>
      </li>
      {isAuthenticated() && isAuthenticated().user.role === 0 && (
        <li className="nav-item">
          <Link
            style={currentTab(history, '/user/dashboard')}
            className="nav-link"
            to="/user/dashboard"
          >
            U. Dashboard
          </Link>
        </li>
      )}
      {isAuthenticated() && isAuthenticated().user.role === 1 && (
        <li className="nav-item">
          <Link
            style={currentTab(history, '/admin/dashboard')}
            className="nav-link"
            to="/admin/dashboard"
          >
            A. Dashboard
          </Link>
        </li>
      )}
      {!isAuthenticated() && (
        <>
          <li className="nav-item">
            <Link
              style={currentTab(history, '/signup')}
              className="nav-link"
              to="/signup"
            >
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={currentTab(history, '/signin')}
              className="nav-link"
              to="/signin"
            >
              Sign In
            </Link>
          </li>
        </>
      )}
      {isAuthenticated() && (
        <li className="nav-item">
          <span
            className="nav-link text-warning"
            onClick={() => {
              signout(() => {
                history.push('/');
              });
            }}
          >
            Signout
          </span>
        </li>
      )}
    </ul>
  </div>
);

export default withRouter(Menu);

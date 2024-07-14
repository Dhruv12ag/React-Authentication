import { useContext } from 'react';
import jwt_decode from 'jwt-decode';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Navbar() {
  const { user, logoutUser } = useContext(AuthContext);
  const token = localStorage.getItem('authTokens');

  if (token) {
    const decoded = jwt_decode(token);
    var user_id = decoded.user_id;
  }

  const navbarStyle = {
    backgroundColor: '#22489E',
  };

  const navLinkStyle = {
    color: '#ffffff',
  };

  const navLinkHoverStyle = {
    color: '#dddddd',
  };

  const imageStyle = {
    width: '45px',
    padding: '6px',
    position: 'relative',
    top: '-5px',
    left: '10px',
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={navbarStyle}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              style={imageStyle}
              src="https://i.imgur.com/W6HzcB7.png"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={navLinkStyle}>
                  Home
                </a>
              </li>
              {token === null && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login" style={navLinkStyle}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register" style={navLinkStyle}>
                      Register
                    </Link>
                  </li>
                </>
              )}

              {token !== null && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/dashboard" style={navLinkStyle}>
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={logoutUser} style={{ cursor: 'pointer', ...navLinkStyle }}>
                      Logout
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

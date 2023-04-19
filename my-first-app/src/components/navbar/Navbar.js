import './navbar.css';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <img className="logo" src="./images/logo.png" />

        <div className="mainItems">
          <div className="searchBar">
            <li>Search</li>
            <input type="text" />
          </div>

          <div className="routs">
            <ul>
              <Link to={'/'}>
                <button className="mainCompo">
                  <li>Home</li>
                </button>
              </Link>

              <Link to={'/signup'}>
                <button className="abt">
                  <li>Book Now</li>
                </button>
              </Link>
              {/* <li>Book Now</li> */}
              <li>Create ad</li>

              <Link to={'/about'}>
                <button className="abt">
                  <li>About</li>
                </button>
              </Link>

              {/* <li>About</li> */}
            </ul>
          </div>

          <Link to={'/signup'}>
            <button className="navButton">Sign up</button>
          </Link>

          <Link to={'/login'}>
            <button className="navButton">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default navbar;

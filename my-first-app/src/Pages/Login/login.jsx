import { Navbar } from 'react-bootstrap';

import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [popupStyle, showPopup] = useState('hide');

  const popup = () => {
    showPopup('loginpopup');
    setTimeout(() => showPopup('hide'), 3000);
  };

  return (
    <div className="page">
      <img src="./images/logback.jpg" alt="" />

      <div className="welcome">
        <h1>WELCOME !</h1>
        <p>You can log in to your existing account</p>
      </div>

      <div className="cover">
        <h1>Login</h1>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />

        <div className="loginbtn" onClick={popup}>
          Login
        </div>

        <p className="text">Or loging using</p>

        <div className="altlogin">
          <div className="facebook">
            <img
              className="logos"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/150px-Facebook_f_logo_%282021%29.svg.png"
              alt=""
            />
          </div>

          <div className="google">
            <img
              className="logos"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/150px-Google_%22G%22_Logo.svg.png"
              alt=""
            />
          </div>
        </div>

        <div className={popupStyle}>
          <h3>Login Failed</h3>
          <p>Username or Incorrect password</p>
        </div>
      </div>
    </div>
  );
};

export default Login;

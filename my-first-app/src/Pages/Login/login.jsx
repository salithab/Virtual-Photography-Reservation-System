import { Navbar } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import "./login.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import { login } from '../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";

const Login = () => {
  const { isFetching, error, currentUser } = useSelector((state) => state.user);
  const [popupStyle, showPopup] = useState("hide");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      navigate("/")
    }
  });
  const popup = () => {
    showPopup("loginpopup");
    setTimeout(() => showPopup("hide"), 3000);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Invalid email").required("Email is required"),
      password: yup.string().required("password is required")
    }),
    onSubmit: async (values) => {

      login(dispatch, { ...values });
      if(currentUser){
        navigate("/");
      }
      else{
        popup()
      }
    },
  });

  

  return (
    <div className="page">
      <img src="./images/logback.jpg" alt="" />

      <div className="welcome">
        <h1>WELCOME !</h1>
        <p>You can log in to ypor existing account</p>
      </div>

      <div className="cover">
        <h1>Login</h1>
        <Form onSubmit={formik.handleSubmit} className="px-5 signinForm">
          <Form.Group>
            <Form.Control
              className="input"
              placeholder="E-mail"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="input"
              placeholder="Password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </Form.Group>
          <Button type="submit" className="loginbtn" disabled={false}>
            LOG IN
          </Button>
        </Form>

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

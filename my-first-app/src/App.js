import React from "react";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/SignUp/signup";
import Login from "./Pages/Login/login";
import Photographer from "./Pages/Photographer/photographer";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from './Pages/Login/Login'
import "./App.css";

const App = () => {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />}/>
        <Route path="photographer" element={<Photographer/>}/>
        {/* <Route path="login" element={<SignUp />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;

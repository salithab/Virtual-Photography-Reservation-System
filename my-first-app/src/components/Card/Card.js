import './card.css';

// import {Navigate, useNavigate, userNavigate} from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useNavigate } from 'react-router-dom';
// import Photographer from "../Pages/Photographer/photographer"
// import { Route, Router } from "react-router-dom"

function Card({ title, image, body, bimage }) {
  const navigate = useNavigate();

  return (
    <div className="mains">
      <div className="cardContainer">
        <div className="upprecontainer">
          <img src={bimage} alt="" />

          <div className="imageContainer">
            <img className="propic" src={image} alt="" />
          </div>
        </div>

        <br />
        <br />
        <div className="cardContent">
          <div className="cardTitle">
            <h3>{title}</h3>
          </div>

          <div className="cardBody">
            <p>{body}</p>
          </div>
        </div>

        <div className="btn">
          <button
            onClick={() => navigate('./photographer')}
            className="viewbtn"
          >
            <a>view more</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

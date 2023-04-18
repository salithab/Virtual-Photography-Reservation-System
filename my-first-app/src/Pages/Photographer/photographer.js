import React from "react";
import "./photographer.css";

import { useNavigate } from "react-router-dom";

const Photographer = () => {
  const navigate = useNavigate();

  return (
    <div className="profile">
      <div className="upper">
        <h3>Overview</h3>
        <h3>About photographer</h3>
        <h3>Reviews</h3>
      </div>

      <div className="pName">
        <h3>ROBERT FRANK</h3>

        <h6>Level 1 photographer</h6>
      </div>

      <div className="profileHead">
        <div className="about">
          <div className="profilePhoto">
            <img className="pimg" src="./images/robert.jpg" />
          </div>
          <div className="description">
            I am a professional Wedding and Family Photographer with over 8years
            of experience retouching & postprocessing images from manydifferent
            Genres like Weddings, Baptism and others
          </div>
        </div>

        <div className="picbtn">
          <div className="photoCollection">
            <div className="collectionRow">
              <div className="collectionCol">
                <img className="mainImg" src="./images/robertw1.jpg"></img>
              </div>
            </div>
            <div className="collectionRow">
              <div className="collectionCol">
                <img className="secImg" src="./images/robertw2.jpg"></img>
              </div>
              <div className="collectionCol">
                <img className="secImg" src="./images/robertw3.jpeg"></img>
              </div>
            </div>
          </div>

          <div className="packbtn">
            <button onClick={() => navigate("/packageList")} className="choosepack">
              Choose Package
            </button>
          </div>
        </div>
      </div>

      <div className="reviews">
        <h3>Reviews</h3>

        <div className="imgname">
          <div className="img">
            <img className="propic" src="./IMAGES/robert.jpg"></img>
          </div>

          <div className="rname">
            <h4>John</h4>
          </div>
        </div>

        <div className="comment">
          <p>
            He was extremely helpful with describing how to send the images
            since I’ve never done it before. I got the best images and quickly.
            Will definitely order from him again!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Photographer;

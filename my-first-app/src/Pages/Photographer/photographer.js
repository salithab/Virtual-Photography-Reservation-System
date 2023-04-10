import React from "react";
import "./photographer.css";

const Photographer = () => {
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

      <div className="ptofileHead">
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
        <div className="photoCollection">
          <div className="collectionRow">
            <div className="collectionCol">
              <img className="mainImg" src="./images/robert.jpg"></img>
            </div>
          </div>
          <div className="collectionRow">
            <div className="collectionCol">
              <img className="secImg" src="./images/robert.jpg" ></img>
            </div>
            <div className="collectionCol">
              <img  className="secImg" src="./images/robert.jpg"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photographer;

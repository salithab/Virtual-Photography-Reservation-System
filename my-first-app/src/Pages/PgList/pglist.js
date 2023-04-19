import React from 'react';
import Card from '../../components/Card/Card';

import { Navbar } from 'react-bootstrap';

// import React, { useState } from 'react';

import './pglist.css';

const PgList = () => {
  return (
    <div className="pgpage">
      <div className="content">
        <div className="heading">
          <h1>All photographers</h1>
        </div>

        <div className="cardsec">
          <div className="raw">
            <div className="cardbody">
              <Card
                bimage="../images/loginback.jpg"
                title="ROBERT FRANK"
                image="../images/robert.jpg"
                body="I am a professional Wedding and Family Photographer with over 8 years of experience retouching & post-processing images from many different Genres like Weddings, Baptism and others."
              />
            </div>

            <div className="card">
              <Card
                bimage="../images/loginback.jpg"
                title="RICHARD AVADON"
                image="../images/richard.jpg"
                body="We plan sophisticated shoots, producing engaging photo which is tailored individually to the chosen platform/s to best gain conversions. We source the right location, model & influencer for your products, social media, lifestyle"
              />
            </div>

            <div className="card">
              <Card
                bimage="../images/loginback.jpg"
                title="WALKER EVANS"
                image="../images/wick.jpg"
                body="I have been a professional lifestyle photographer and videographer for the past 20 years. I have hundreds of baby, toddler, child, teen, adult, senior, puppy and dog models, all with beautiful, amazing lighting and sharp photos."
              />
            </div>
          </div>

          <div className="raw">
            <div className="cardbody">
              <Card
                bimage="../images/loginback.jpg"
                title="ROBERT FRANK"
                image="../images/robert.jpg"
                body="I am a professional Wedding and Family Photographer with over 8 years of experience retouching & post-processing images from many different Genres like Weddings, Baptism and others."
              />
            </div>

            <div className="card">
              <Card
                bimage="../images/loginback.jpg"
                title="RICHARD AVADON"
                image="../images/richard.jpg"
                body="We plan sophisticated shoots, producing engaging photo which is tailored individually to the chosen platform/s to best gain conversions. We source the right location, model & influencer for your products, social media, lifestyle"
              />
            </div>

            <div className="card">
              <Card
                bimage="../images/loginback.jpg"
                title="WALKER EVANS"
                image="../images/wick.jpg"
                body="I have been a professional lifestyle photographer and videographer for the past 20 years. I have hundreds of baby, toddler, child, teen, adult, senior, puppy and dog models, all with beautiful, amazing lighting and sharp photos."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PgList;

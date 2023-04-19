import { Navbar } from 'react-bootstrap';

import React, { useState } from 'react';

import './about.css';

// import React from 'react'

const About = () => {
  return (
    <div className="fulls">
      <div className="abot">
        <h1>About</h1>
      </div>

      <div className="welcomenote">
        <h3>
          Welcome to our online photography reservation system website! We are a
          team of professional photographers dedicated to capturing your
          precious moments with creativity and excellence.
        </h3>
      </div>

      <div className="abd">
        <h2>Our Story</h2>

        <h5 className="des">
          Our journey began with a passion for photography and a vision to
          provide a convenient and reliable online platform for clients to book
          professional photographers for their special occasions. We have been
          serving clients for 2 years and have built a reputation for delivering
          exceptional photography services.
        </h5>
      </div>

      <div className="abd">
        <h2>Our Mission</h2>

        <h5 className="des">
          At our online photography reservation system, our mission is to make
          photography accessible, easy, and enjoyable for everyone. We strive to
          provide a seamless and user-friendly experience for our clients to
          book a photographer for their events or occasions, from weddings and
          engagements to family portraits and corporate events.
        </h5>
      </div>

      <div className="abd">
        <h2>Our services</h2>

        <h5 className="des">
          We offer a wide range of photography services to cater to various
          needs and preferences. Our photographers are skilled in capturing
          candid moments, natural expressions, and stunning visuals. Our
          services include wedding photography, engagement photography, family
          portraits, corporate events, etc.
        </h5>
      </div>

      <div className="whychose">
        <h2>Why Choose us</h2>

        <h5>
          Professional Photographers: Our team of photographers consists of
          experienced and skilled professionals who are passionate about their
          craft and committed to capturing your moments with excellence.
          <br></br>
          Convenience: Our online reservation system allows you to easily book a
          photographer from the comfort of your own home or office, saving you
          time and effort.
          <br></br>
          Customization: We understand that each client has unique requirements,
          and we offer tailored packages to suit your specific needs and budget.
          <br></br>
          High-Quality Results: We use state-of-the-art equipment and techniques
          to deliver high-quality photographs that you will cherish for years to
          come.
          <br></br>
          Excellent Customer Service: We are dedicated to providing outstanding
          customer service, from prompt responses to inquiries to attentive
          assistance throughout the photography process.
        </h5>
      </div>

      <div className="thank">
        <h3>
          Thank you for considering our online photography reservation system
          for your photography needs. We look forward to serving you and
          creating lasting memories together!
        </h3>
      </div>
    </div>
  );
};

export default About;

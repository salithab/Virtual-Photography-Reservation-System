import React from 'react';

import './avacheck.css';
// import React, { useState } from 'react';

// import React from 'react';

const AvaCheck = () => {
  return (
    <div className="allitems">
      <div className="booking">
        <h1>Bookings</h1>
      </div>

      <div className="box">
        <div className="fill">
          <div className="inp">
            <h5>Type</h5>
            <input type="text" placeholder="type" />
          </div>

          <div className="inp">
            <h5>Venue</h5>
            <input type="text" placeholder="venue" />
          </div>

          <div className="inp">
            <h5>Date</h5>
            <input type="text" placeholder="date" />
          </div>

          <div className="inp">
            <h5>Time slot</h5>
            <input type="text" placeholder="time slot" />
          </div>
        </div>

        <div>
          <button className="ckeckbtn">Check</button>
        </div>
      </div>
    </div>
  );
};

export default AvaCheck;

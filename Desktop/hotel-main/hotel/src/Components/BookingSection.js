import React, { useState } from "react";
import "./booking.css";
import Bridge from "./bridge";

function BookingSection() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const incrementAdults = () => setAdults(adults + 1);
  const decrementAdults = () => adults > 1 && setAdults(adults - 1);
  const incrementChildren = () => setChildren(children + 1);
  const decrementChildren = () => children > 0 && setChildren(children - 1);

  return (
    <div className="Date-Container">
      <div className="booking-container">
        <div className="booking-section">
          <div className="booking-inputs">
            <div className="date-inputs">
              <div className="date-input">
                <label htmlFor="checkin">Check-in:</label>
                <input type="date" id="checkin" />
              </div>
              <div className="date-input">
                <label htmlFor="checkout">Check-out:</label>
                <input type="date" id="checkout" />
              </div>
            </div>
            <div className="input-group">
              <div className="guest-input">
                <label>Adults:</label>
                <button onClick={decrementAdults}>-</button>
                <span>{adults}</span>
                <button onClick={incrementAdults}>+</button>
              </div>
              <div className="guest-input">
                <label>Children:</label>
                <button onClick={decrementChildren}>-</button>
                <span>{children}</span>
                <button onClick={incrementChildren}>+</button>
              </div>
            </div>
            <div className="button-group">
              <button className="check-availability">Check Availability</button>
            </div>
          </div>
        </div>
      </div>
      <Bridge />
    </div>
  );
}

export default BookingSection;

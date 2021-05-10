import React from 'react';

const ConfirmTicket = () => {
    return (
        <div className="confirm-section">
            <form>
                <div className="form-group-ticket">
                    <label htmlFor="trainName">Train Name</label>
                    <input type="text" name="trainName" id="trainName" value="Train E2" />
                </div>

                <div className="form-group-ticket">
                    <label htmlFor="departureDate">Date</label>
                    <input type="text" name="departureDate" id="departureDate" value="Thur, JAN 30, 2020" />
                </div>

                <div className="form-group-ticket">
                    <label htmlFor="departureTime">Time</label>
                    <input type="text" name="departureTime" id="departureTime" value="0235" />
                </div>

                <div className="form-group-ticket">
                    <label htmlFor="coachClass">Coach Class</label>
                    <input type="text" name="coachClass" id="coachClass" value="Economy Class" />
                </div>

                <div className="form-group-ticket">
                    <label htmlFor="fare">Fare(Adult, Child)</label>
                    <input type="text" name="fare" id="fare" value="1000, 500" />
                </div>

                <div className="form-group-ticket">
                    <label htmlFor="passengers">Passengers</label>
                    <input type="text" name="passengers" id="passengers" value="2 Adults, 3 children" />
                </div>

                <div className="form-group-ticket">
                    <label htmlFor="totalFare">Total Fare</label>
                    <input type="text" name="totalFare" id="totalFare" value="4500" />
                </div>

                <button type="submit">Confirm Ticket</button>
                {/* when button is clicked, goes to the payment component */}
            </form>
        </div>
    );
}
 
export default ConfirmTicket;
import React, { useState } from "react";
import "../Css/Train.css";

const Train = ({ train }) => {
  
  //TODO: update the train name to the client's database
  // in the database, it is named _id
  // also, fetching all users in the database not a good idea, it is best we deal with one id
  // the id being brought is for the train and what we want to update is traveller collection
  // this means the id that needs to be in the fetch collection should be that of traveller route
  const [trainName, setTrainName] = useState({
    name: train.trainName,
  });

  const handleChange = (e) => {
    setTrainName((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = {
      trainChosen: trainName.name,
    };
    // putting id in reducers
    // TODO: then use dataset to grab the id
    const train_id = e.target.dataset.train_id;
    console.log(train_id);
    const response =  fetch(`http://localhost:5000/traveller/${train_id}`);
    console.log(response);
    // fetch(`http://localhost:5000/traveller/${train_id}`, {
    //   method: "PUT", //TODO: put
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     trainName: formValues.trainChosen,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((post) => console.log(post))
  };
  return (
    <div className="train-card" key={train._id} data-train_id={train._id}>
      <div className="train-header">
        <h3>
          Train {train.trainName} - {train.from} Terminus to {train.destination}
        </h3>
      </div>
      <div className="train-body">
        <div className="first-class-info">
          <p>First class - {train.firstClass} seats open </p>
          <p>Adults: kshs. 3000 </p>
          <p>Children (btwn 3 - 11yrs):kshs. 1500 </p>
          <p>Children (below 3 yrs): Free</p>
        </div>
        <hr />
        <div className="economy-class-info">
          <p>Economy - {train.economyClass} seats open </p>
          <p>Adults: kshs. 1000 </p>
          <p>Children (btwn 3 - 11yrs):kshs. 500 </p>
          <p>Children (below 3 yrs): Free</p>
        </div>
        <small>
          <span style={{ marginRight: "5%" }}>Departure: 02:35</span>
          <span>Arrival: 07:18</span>
        </small>

        <form onSubmit={handleSubmit} data-train_id={train._id}>
          <input 
            type="hidden"
            onChange={handleChange}
            value="traveller id value"
          />
          <input
            type="hidden"
            onChange={handleChange}
            value={trainName.name}
          />
          {/* so that we are able to take the id and */}
          {train.trainName}
          <button type="submit">
            Choose Train
          </button>
        </form>
      </div>
    </div>
  );
};

export default Train;

import { FETCH_TRAINS, FETCH_TRAINS_DESTINATION, SINGLE_TRAIN } from "./types";

// FETCH ALL TRAINS

//FETCH ALL TRAINS BASED ON LOCATION AND DATE CRITERIA
export const filterTrainDestination = (trains, from, destination) => (dispatch) => {
  fetch("http://localhost:5000/trains/")
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: FETCH_TRAINS_DESTINATION,
        from,
        destination,
        payload: data
      })
    );
};
// A SINGLE TRAIN CHOSE

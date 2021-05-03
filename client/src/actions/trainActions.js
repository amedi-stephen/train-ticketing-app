import { FETCH_TRAINS } from "./types";

export function fetchTrains() {
  return function (dispatch) {
    fetch("http://localhost:5000/trains")
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: FETCH_TRAINS,
          payload: data,
        })
      );
  };
}

export function createSeatTraveller(seatData) {
  return function (dispatch) {
    fetch("")
  }
}
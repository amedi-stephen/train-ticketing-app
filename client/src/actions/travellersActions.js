import { FETCH_TRAVELLERS, CREATE_TRAVELLER_DESTINATION } from "./types";

export function fetchTravellerStore() {
  return function (dispatch) {
    fetch("http://localhost:5000/traveller/users")
      .then(response => response.json())
      .then(travellers => dispatch({
        type: FETCH_TRAVELLERS,
        payload: travellers
      }))
  }
}

export function createDestination(postedData) {
    return function (dispatch) {
      fetch("http://localhost:5000/traveller/post", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(postedData)
      })
        .then((response) => response.json())
        .then((post) =>
          dispatch({
            type: CREATE_TRAVELLER_DESTINATION,
            payload: post,
          })
        );
    };
  }
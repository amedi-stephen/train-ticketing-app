import { POST_TRAVELLER_DETAILS, FETCH_TRAVELLERS, SINGLE_TRAVELLER } from "./types";

export const postTravellerDetails = (details) => (dispatch) => {
  fetch("http://localhost:5000/traveller/post", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(details),
  })
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: POST_TRAVELLER_DETAILS,
        payload: data,
      })
    );
};

export const fetchTravellers = () => (dispatch) => {
  fetch("http://localhost:5000/traveller/users")
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: FETCH_TRAVELLERS,
        payload: data,
      })
    );
};

// SINGLE TRAVELLER
export const fetchActiveTraveller = () => (dispatch) => {
  //TODO: we need an dynamic id variable to post to url
  fetch("http://localhost:5000/traveller/")
    .then(response => response.json())
    .then(traveller => dispatch({
      type: SINGLE_TRAVELLER,
      payload: traveller
    }))
}

import { FETCH_TRAINS } from "../actions/types";

const initialState = {
  trainsStore: [],
};

// a function to fetch the trains from the db

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TRAINS:
      return {
        ...state,
        trainsStore: action.payload,
      };
    default:
      return state;
  }
}

// put in the trains from the api and search

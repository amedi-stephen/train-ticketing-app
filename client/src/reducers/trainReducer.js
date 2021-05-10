import {
  FETCH_TRAINS,
  FETCH_TRAINS_DESTINATION,
  SINGLE_TRAIN,
  
} from "../actions/types";

const initialState = {
  trainItems: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRAINS_DESTINATION:
      return {
        ...state,
        trainItems: action.payload,
      };
    default:
      return state;
  }
};

import { combineReducers } from "redux";
import trainsReducer from "./trainsReducer";
import travellersReducer from "./travellersReducer";

export default combineReducers({
  trains: trainsReducer,
  travellers: travellersReducer
});

import { combineReducers } from "redux";
import travellerReducer from "./travellerReducer";

export default combineReducers({
    traveller: travellerReducer
})
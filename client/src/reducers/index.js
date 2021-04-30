import { combineReducers } from "redux";
import travellerReducer from "./travellerReducer";
import trainReducer from "./trainReducer";

export default combineReducers({
    traveller: travellerReducer,
    trains: trainReducer
})
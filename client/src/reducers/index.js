import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import trainReducer from "./trainReducer";
import travellerReducer from "./travellerReducer";
import ticketReducer from "./ticketReducer";

export default combineReducers({
    // search: searchReducer,
    trains: trainReducer,
    travellers: travellerReducer,
    // tickets: ticketReducer,
    // bookings: bookingReducer
})
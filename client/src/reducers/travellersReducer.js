import { CREATE_TRAVELLER_DESTINATION, FETCH_TRAVELLERS } from "../actions/types";

const initialState = {
    // TODO: start from adding the travelStore array, to enable us quickly access our data
    travellersStore: [],
    travellerDestination: {}
}

export default function (state=initialState, action) {
    switch (action.type) {
        case FETCH_TRAVELLERS:
            return {
                ...state,
                travellerStore: action.payload
            };
        case CREATE_TRAVELLER_DESTINATION:
        return {
          ...state,
          travellerDestination: action.payload
        }
        default:
            return state;
    }
}
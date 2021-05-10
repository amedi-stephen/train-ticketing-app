import { POST_TRAVELLER_DETAILS, FETCH_TRAVELLERS, SINGLE_TRAVELLER } from "../actions/types";

const initialState = {
    travellerItems: [],
    travellerPost: {},
    activeTraveller: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case POST_TRAVELLER_DETAILS:
            return {
                ...state,
                travellerPost: action.payload
            }
            case FETCH_TRAVELLERS:
                return {
                    ...state,
                    travellerItems: action.payload
                }
            case SINGLE_TRAVELLER:
                return {
                    ...state,
                    activeTraveller: action.payload
                }
        default:
            return state;
    }
}
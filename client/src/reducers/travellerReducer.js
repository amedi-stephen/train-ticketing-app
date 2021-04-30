import { NEW_TRAVELLER } from "../actions/types";

const initialState = {
    travellers: [],
    traveller: {}
}

export default function(state=initialState, action) {
    switch (action.type) {

        default:
            return state;
    }
}
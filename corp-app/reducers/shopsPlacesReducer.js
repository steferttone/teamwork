import {
    REQUEST_SHOPS_PLACES,
    RESPONSE_SHOPS_PLACES,
    REQUEST_SHOPS_PLACES_FAILURE,
} from 'actions/shopsPlacesActions'

const STATE_NOT_REQUESTED = 'STATE_NOT_REQUESTED'
const STATE_LOADING = 'STATE_LOADING'
const STATE_READY = 'STATE_READY'

const initialState = {
    dataState: STATE_NOT_REQUESTED,
    data: [],
}

const shopsPlacesReducer = (state = initialState, action) => {
    switch (action.type) {
    case REQUEST_SHOPS_PLACES:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_LOADING,
                data: [],
            }
        )
    case RESPONSE_SHOPS_PLACES:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_READY,
                data: action.data,
            }
        )
    case REQUEST_SHOPS_PLACES_FAILURE:
        return Object.assign(
            {},
            state,
            {
                dataState: REQUEST_SHOPS_PLACES_FAILURE,
                data: action.error,
            }
        )
    default:
        return state
    }
}

export default shopsPlacesReducer

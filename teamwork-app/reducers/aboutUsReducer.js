import {
    REQUEST_ABOUT_US_DATA,
    RESPONSE_ABOUT_US_DATA,
    REQUEST_ABOUT_US_DATA_FAILURE,
} from 'actions/aboutUsActions'

const STATE_NOT_REQUESTED = 'STATE_NOT_REQUESTED'
const STATE_LOADING = 'STATE_LOADING'
const STATE_READY = 'STATE_READY'

const initialState = {
    dataState: STATE_NOT_REQUESTED,
    data: [],
}

const aboutUsReducer = (state = initialState, action) => {
    switch (action.type) {
    case REQUEST_ABOUT_US_DATA:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_LOADING,
                data: [],
            }
        )
    case RESPONSE_ABOUT_US_DATA:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_READY,
                data: action.data,
            }
        )
    case REQUEST_ABOUT_US_DATA_FAILURE:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_READY,
                data: [],
            }
        )
    default:
        return state
    }
}

export default aboutUsReducer

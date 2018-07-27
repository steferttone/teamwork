import {
    REQUEST_FOR_DILLERS,
    RESPONSE_FOR_DILLERS,
    REQUEST_FOR_DILLERS_FAILURE,
} from 'actions/forDillersActions'

const STATE_NOT_REQUESTED = 'STATE_NOT_REQUESTED'
const STATE_LOADING = 'STATE_LOADING'
const STATE_READY = 'STATE_READY'

const initialState = {
    dataState: STATE_NOT_REQUESTED,
    data: [],
}

const forDillersReducer = (state = initialState, action) => {
    switch (action.type) {
    case REQUEST_FOR_DILLERS:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_LOADING,
                data: [],
            }
        )
    case RESPONSE_FOR_DILLERS:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_READY,
                data: action.data,
            }
        )
    case REQUEST_FOR_DILLERS_FAILURE:
        return Object.assign(
            {},
            state,
            {
                dataState: REQUEST_FOR_DILLERS_FAILURE,
                data: action.error,
            }
        )
    default:
        return state
    }
}

export default forDillersReducer

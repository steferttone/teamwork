import {
    REQUEST_REQUISITES_DATA,
    RESPONSE_REQUISITES_DATA,
    REQUEST_REQUISITES_DATA_FAILURE,
} from 'actions/requisitesActions'

const STATE_NOT_REQUESTED = 'STATE_NOT_REQUESTED'
const STATE_LOADING = 'STATE_LOADING'
const STATE_READY = 'STATE_READY'

const initialState = {
    dataState: STATE_NOT_REQUESTED,
    data: [],
}

const requisitesReducer = (state = initialState, action) => {
    switch (action.type) {
    case REQUEST_REQUISITES_DATA:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_LOADING,
                data: [],
            }
        )
    case RESPONSE_REQUISITES_DATA:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_READY,
                data: action.data,
            }
        )
    case REQUEST_REQUISITES_DATA_FAILURE:
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

export default requisitesReducer

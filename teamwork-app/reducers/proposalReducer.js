import {
    REQUEST_PROPOSAL_DATA,
    RESPONSE_PROPOSAL_DATA,
    REQUEST_PROPOSAL_DATA_FAILURE,
} from 'actions/proposalActions'

const STATE_NOT_REQUESTED = 'STATE_NOT_REQUESTED'
const STATE_LOADING = 'STATE_LOADING'
const STATE_READY = 'STATE_READY'

const initialState = {
    dataState: STATE_NOT_REQUESTED,
    data: [],
}

const proposalReducer = (state = initialState, action) => {
    switch (action.type) {
    case REQUEST_PROPOSAL_DATA:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_LOADING,
                data: [],
            }
        )
    case RESPONSE_PROPOSAL_DATA:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_READY,
                data: action.data,
            }
        )
    case REQUEST_PROPOSAL_DATA_FAILURE:
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

export default proposalReducer

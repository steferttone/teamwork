import {
    REQUEST_PROJECTS_DATA,
    RESPONSE_PROJECTS_DATA,
    REQUEST_PROJECTS_DATA_FAILURE,
} from 'actions/projectsActions'

const STATE_NOT_REQUESTED = 'STATE_NOT_REQUESTED'
const STATE_LOADING = 'STATE_LOADING'
const STATE_READY = 'STATE_READY'

const initialState = {
    dataState: STATE_NOT_REQUESTED,
    data: [],
}

const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
    case REQUEST_PROJECTS_DATA:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_LOADING,
                data: [],
            }
        )
    case RESPONSE_PROJECTS_DATA:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_READY,
                data: action.data,
            }
        )
    case REQUEST_PROJECTS_DATA_FAILURE:
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

export default projectsReducer

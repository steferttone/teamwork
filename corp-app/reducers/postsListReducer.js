import {
    REQUEST_POSTS_LIST,
    RESPONSE_POSTS_LIST,
    REQUEST_POSTS_LIST_FAILURE,
} from 'actions/postsListActions'

const STATE_NOT_REQUESTED = 'STATE_NOT_REQUESTED'
const STATE_LOADING = 'STATE_LOADING'
const STATE_READY = 'STATE_READY'

const initialState = {
    dataState: STATE_NOT_REQUESTED,
    data: [],
}

const postsListReducer = (state = initialState, action) => {
    switch (action.type) {
    case REQUEST_POSTS_LIST:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_LOADING,
                data: [],
            }
        )
    case RESPONSE_POSTS_LIST:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_READY,
                data: action.data,
            }
        )
    case REQUEST_POSTS_LIST_FAILURE:
        return Object.assign(
            {},
            state,
            {
                dataState: REQUEST_POSTS_LIST_FAILURE,
                data: action.error,
            }
        )
    default:
        return state
    }
}

export default postsListReducer

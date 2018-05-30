import {
    REQUEST_NEWS_LIST,
    RESPONSE_NEWS_LIST,
    REQUEST_NEWS_LIST_FAILURE,
} from 'actions/newsListActions'

const STATE_NOT_REQUESTED = 'STATE_NOT_REQUESTED'
const STATE_LOADING = 'STATE_LOADING'
const STATE_READY = 'STATE_READY'

const initialState = {
    dataState: STATE_NOT_REQUESTED,
    data: [],
}

const newsListReducer = (state = initialState, action) => {
    switch (action.type) {
    case REQUEST_NEWS_LIST:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_LOADING,
                data: [],
            }
        )
    case RESPONSE_NEWS_LIST:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_READY,
                data: action.data,
            }
        )
    case REQUEST_NEWS_LIST_FAILURE:
        return Object.assign(
            {},
            state,
            {
                dataState: REQUEST_NEWS_LIST_FAILURE,
                data: action.error,
            }
        )
    default:
        return state
    }
}

export default newsListReducer

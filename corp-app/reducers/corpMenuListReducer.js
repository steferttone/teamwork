import {
    REQUEST_CORP_MENU_LIST,
    RESPONSE_CORP_MENU_LIST,
    REQUEST_CORP_MENU_LIST_FAILURE,
} from 'actions/corpMenuListActions'

const STATE_NOT_REQUESTED = 'STATE_NOT_REQUESTED'
const STATE_LOADING = 'STATE_LOADING'
const STATE_READY = 'STATE_READY'

const initialState = {
    dataState: STATE_NOT_REQUESTED,
    data: [],
}

const corpMenuListReducer = (state = initialState, action) => {
    switch (action.type) {
    case REQUEST_CORP_MENU_LIST:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_LOADING,
                data: [],
            }
        )
    case RESPONSE_CORP_MENU_LIST:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_READY,
                data: action.data,
            }
        )
    case REQUEST_CORP_MENU_LIST_FAILURE:
        return Object.assign(
            {},
            state,
            {
                dataState: REQUEST_CORP_MENU_LIST_FAILURE,
                data: action.error,
            }
        )
    default:
        return state
    }
}

export default corpMenuListReducer

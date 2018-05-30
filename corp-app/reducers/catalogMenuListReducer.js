import {
    REQUEST_CATALOG_MENU_LIST,
    RESPONSE_CATALOG_MENU_LIST,
    REQUEST_CATALOG_MENU_LIST_FAILURE,
} from 'actions/catalogMenuListActions'

const STATE_NOT_REQUESTED = 'STATE_NOT_REQUESTED'
const STATE_LOADING = 'STATE_LOADING'
const STATE_READY = 'STATE_READY'

const initialState = {
    dataState: STATE_NOT_REQUESTED,
    data: [],
}

const catalogMenuListReducer = (state = initialState, action) => {
    switch (action.type) {
    case REQUEST_CATALOG_MENU_LIST:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_LOADING,
                data: [],
            }
        )
    case RESPONSE_CATALOG_MENU_LIST:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_READY,
                data: action.data,
            }
        )
    case REQUEST_CATALOG_MENU_LIST_FAILURE:
        return Object.assign(
            {},
            state,
            {
                dataState: REQUEST_CATALOG_MENU_LIST_FAILURE,
                data: action.error,
            }
        )
    default:
        return state
    }
}

export default catalogMenuListReducer

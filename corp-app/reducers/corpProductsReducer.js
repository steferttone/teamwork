import {
    REQUEST_CORP_PRODUCTS,
    RESPONSE_CORP_PRODUCTS,
    REQUEST_CORP_PRODUCTS_FAILURE,
} from 'actions/corpProductsActions'

const STATE_NOT_REQUESTED = 'STATE_NOT_REQUESTED'
const STATE_LOADING = 'STATE_LOADING'
const STATE_READY = 'STATE_READY'

const initialState = {
    dataState: STATE_NOT_REQUESTED,
    data: [],
}

const corpProductsReducer = (state = initialState, action) => {
    switch (action.type) {
    case REQUEST_CORP_PRODUCTS:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_LOADING,
                data: [],
            }
        )
    case RESPONSE_CORP_PRODUCTS:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_READY,
                data: action.data,
            }
        )
    case REQUEST_CORP_PRODUCTS_FAILURE:
        return Object.assign(
            {},
            state,
            {
                dataState: REQUEST_CORP_PRODUCTS_FAILURE,
                data: action.error,
            }
        )
    default:
        return state
    }
}

export default corpProductsReducer

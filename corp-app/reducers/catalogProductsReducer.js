import {
    REQUEST_CATALOG_PRODUCTS,
    RESPONSE_CATALOG_PRODUCTS,
    REQUEST_CATALOG_PRODUCTS_FAILURE,
} from 'actions/catalogProductsActions'

const STATE_NOT_REQUESTED = 'STATE_NOT_REQUESTED'
const STATE_LOADING = 'STATE_LOADING'
const STATE_READY = 'STATE_READY'

const initialState = {
    dataState: STATE_NOT_REQUESTED,
    data: [],
}

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
    case REQUEST_CATALOG_PRODUCTS:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_LOADING,
                data: [],
            }
        )
    case RESPONSE_CATALOG_PRODUCTS:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_READY,
                data: action.data,
            }
        )
    case REQUEST_CATALOG_PRODUCTS_FAILURE:
        return Object.assign(
            {},
            state,
            {
                dataState: REQUEST_CATALOG_PRODUCTS_FAILURE,
                data: action.error,
            }
        )
    default:
        return state
    }
}

export default catalogReducer

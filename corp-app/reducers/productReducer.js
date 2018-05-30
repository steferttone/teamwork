import {
    REQUEST_PRODUCT,
    RESPONSE_PRODUCT,
    REQUEST_PRODUCT_FAILURE,
} from 'actions/productActions'

const STATE_NOT_REQUESTED = 'STATE_NOT_REQUESTED'
const STATE_LOADING = 'STATE_LOADING'
const STATE_READY = 'STATE_READY'

const initialState = {
    dataState: STATE_NOT_REQUESTED,
    data: [],
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
    case REQUEST_PRODUCT:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_LOADING,
                data: [],
            }
        )
    case RESPONSE_PRODUCT:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_READY,
                data: action.data,
            }
        )
    case REQUEST_PRODUCT_FAILURE:
        return Object.assign(
            {},
            state,
            {
                dataState: REQUEST_PRODUCT_FAILURE,
                data: action.error,
            }
        )
    default:
        return state
    }
}

export default productReducer

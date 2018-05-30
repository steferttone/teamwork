REQUEST_PRODUCT,
RESPONSE_PRODUCT,
REQUEST_PRODUCT_FAILURE

import { ajaxRequest } from 'handlers/ajaxWrapper'

import { PRODUCT_ENDPOINT } from 'endpoints/index'

const REQUEST_PRODUCT = 'REQUEST_PRODUCT'
const RESPONSE_PRODUCT = 'RESPONSE_PRODUCT'
const REQUEST_PRODUCT_FAILURE = 'REQUEST_PRODUCT_FAILURE'

const requestProductAction = () => {
    return {
        type: REQUEST_PRODUCT,
    }
}

const responseProductAction = (data) => {
    return {
        type: RESPONSE_PRODUCT,
        data,
    }
}

const requstProductFailureAction = (error) => {
    return {
        type: REQUEST_PRODUCT_FAILURE,
        error,
    }
}

const getProduct = () => {
    return (dispatch) => {
        dispatch(requestProductAction())
        const url = PRODUCT_ENDPOINT

        ajaxRequest({
            url,
            method: 'GET',
            dispatch,
            body: '',
            onSuccess: (res) => {
                const response = JSON.parse(res.response)
                dispatch(
                    responseProductAction(response)
                )
            },
            onError: (err) => {
                dispatch(
                    requstProductFailureAction(err)
                )
            },
        })
    }
}

export {
    getProduct,
    requestProductAction,
    responseProductAction,
    requstProductFailureAction,
    REQUEST_PRODUCT,
    RESPONSE_PRODUCT,
    REQUEST_PRODUCT_FAILURE,
}

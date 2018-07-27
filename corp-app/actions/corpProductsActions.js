REQUEST_CORP_PRODUCTS,
RESPONSE_CORP_PRODUCTS,
REQUEST_CORP_PRODUCTS_FAILURE

import { ajaxRequest } from 'handlers/ajaxWrapper'

import { CORP_PRODUCT_ENDPOINT } from 'endpoints/index'

const REQUEST_CORP_PRODUCTS = 'REQUEST_CORP_PRODUCTS'
const RESPONSE_CORP_PRODUCTS = 'RESPONSE_CORP_PRODUCTS'
const REQUEST_CORP_PRODUCTS_FAILURE = 'REQUEST_CORP_PRODUCTS_FAILURE'

const requestCorpAction = () => {
    return {
        type: REQUEST_CORP_PRODUCTS,
    }
}

const responseCorpAction = (data) => {
    return {
        type: RESPONSE_CORP_PRODUCTS,
        data,
    }
}

const requstCorpFailureAction = (error) => {
    return {
        type: REQUEST_CORP_PRODUCTS_FAILURE,
        error,
    }
}

const getCorpProducts = () => {
    return (dispatch) => {
        dispatch(requestCorpAction())
        const url = CORP_PRODUCT_ENDPOINT

        ajaxRequest({
            url,
            method: 'GET',
            dispatch,
            body: '',
            onSuccess: (res) => {
                const response = JSON.parse(res.response)
                dispatch(
                    responseCorpAction(response)
                )
            },
            onError: (err) => {
                dispatch(
                    requstCorpFailureAction(err)
                )
            },
        })
    }
}

export {
    getCorpProducts,
    requestCorpAction,
    responseCorpAction,
    requstCorpFailureAction,
    REQUEST_CORP_PRODUCTS,
    RESPONSE_CORP_PRODUCTS,
    REQUEST_CORP_PRODUCTS_FAILURE,
}

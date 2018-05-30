REQUEST_CATALOG_PRODUCTS,
RESPONSE_CATALOG_PRODUCTS,
REQUEST_CATALOG_PRODUCTS_FAILURE

import { ajaxRequest } from 'handlers/ajaxWrapper'

import { CATALOG_PRODUCTS_ENDPOINT } from 'endpoints/index'

const REQUEST_CATALOG_PRODUCTS = 'REQUEST_CATALOG_PRODUCTS'
const RESPONSE_CATALOG_PRODUCTS = 'RESPONSE_CATALOG_PRODUCTS'
const REQUEST_CATALOG_PRODUCTS_FAILURE = 'REQUEST_CATALOG_PRODUCTS_FAILURE'

const requestCatalogAction = () => {
    return {
        type: REQUEST_CATALOG_PRODUCTS,
    }
}

const responseCatalogAction = (data) => {
    return {
        type: RESPONSE_CATALOG_PRODUCTS,
        data,
    }
}

const requstCatalogFailureAction = (error) => {
    return {
        type: REQUEST_CATALOG_PRODUCTS_FAILURE,
        error,
    }
}

const getCatalogProducts = () => {
    return (dispatch) => {
        dispatch(requestCatalogAction())
        const url = CATALOG_PRODUCTS_ENDPOINT

        ajaxRequest({
            url,
            method: 'GET',
            dispatch,
            body: '',
            onSuccess: (res) => {
                const response = JSON.parse(res.response)
                dispatch(
                    responseCatalogAction(response)
                )
            },
            onError: (err) => {
                dispatch(
                    requstCatalogFailureAction(err)
                )
            },
        })
    }
}

export {
    getCatalogProducts,
    requestCatalogAction,
    responseCatalogAction,
    requstCatalogFailureAction,
    REQUEST_CATALOG_PRODUCTS,
    RESPONSE_CATALOG_PRODUCTS,
    REQUEST_CATALOG_PRODUCTS_FAILURE,
}

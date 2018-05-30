REQUEST_CATALOG_MENU_LIST,
RESPONSE_CATALOG_MENU_LIST,
REQUEST_CATALOG_MENU_LIST_FAILURE

import { ajaxRequest } from 'handlers/ajaxWrapper'

import { CATALOG_MENU_ENDPOINT } from 'endpoints/index'

const REQUEST_CATALOG_MENU_LIST = 'REQUEST_CATALOG_MENU_LIST'
const RESPONSE_CATALOG_MENU_LIST = 'RESPONSE_CATALOG_MENU_LIST'
const REQUEST_CATALOG_MENU_LIST_FAILURE = 'REQUEST_CATALOG_MENU_LIST_FAILURE'

const requestCatalogMenuListAction = () => {
    return {
        type: REQUEST_CATALOG_MENU_LIST,
    }
}

const responseCatalogMenuListAction = (data) => {
    return {
        type: RESPONSE_CATALOG_MENU_LIST,
        data,
    }
}

const requstCatalogMenuListFailureAction = (error) => {
    return {
        type: REQUEST_CATALOG_MENU_LIST_FAILURE,
        error,
    }
}

const getCatalogMenuList = () => {
    return (dispatch) => {
        dispatch(requestCatalogMenuListAction())
        const url = CATALOG_MENU_ENDPOINT

        ajaxRequest({
            url,
            method: 'GET',
            dispatch,
            body: '',
            onSuccess: (res) => {
                const response = JSON.parse(res.response)
                dispatch(
                    responseCatalogMenuListAction(response)
                )
            },
            onError: (err) => {
                dispatch(
                    requstCatalogMenuListFailureAction(err)
                )
            },
        })
    }
}

export {
    getCatalogMenuList,
    requestCatalogMenuListAction,
    responseCatalogMenuListAction,
    requstCatalogMenuListFailureAction,
    REQUEST_CATALOG_MENU_LIST,
    RESPONSE_CATALOG_MENU_LIST,
    REQUEST_CATALOG_MENU_LIST_FAILURE,
}

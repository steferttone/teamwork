REQUEST_CORP_MENU_LIST,
RESPONSE_CORP_MENU_LIST,
REQUEST_CORP_MENU_LIST_FAILURE

import { ajaxRequest } from 'handlers/ajaxWrapper'

import { CORP_MENU_ENDPOINT } from 'endpoints/index'

const REQUEST_CORP_MENU_LIST = 'REQUEST_CORP_MENU_LIST'
const RESPONSE_CORP_MENU_LIST = 'RESPONSE_CORP_MENU_LIST'
const REQUEST_CORP_MENU_LIST_FAILURE = 'REQUEST_CORP_MENU_LIST_FAILURE'

const requestCorpMenuListAction = () => {
    return {
        type: REQUEST_CORP_MENU_LIST,
    }
}

const responseCorpMenuListAction = (data) => {
    return {
        type: RESPONSE_CORP_MENU_LIST,
        data,
    }
}

const requstCorpMenuListFailureAction = (error) => {
    return {
        type: REQUEST_CORP_MENU_LIST_FAILURE,
        error,
    }
}

const getCorpMenuList = () => {
    console.log("getCorpMenuList ")
    return (dispatch) => {
        dispatch(requestCorpMenuListAction())
        const url = CORP_MENU_ENDPOINT

        ajaxRequest({
            url,
            method: 'GET',
            dispatch,
            body: '',
            onSuccess: (res) => {
                console.log("getCorpMenuList onSuccess", response)
                const response = JSON.parse(res.response)
                console.log("getCorpMenuList onSuccess", response)
                dispatch(
                    responseCorpMenuListAction(response)
                )
            },
            onError: (err) => {
                console.log("getCorpMenuList onError", err)
                dispatch(
                    requstCorpMenuListFailureAction(err)
                )
            },
        })
    }
}

export {
    getCorpMenuList,
    requestCorpMenuListAction,
    responseCorpMenuListAction,
    requstCorpMenuListFailureAction,
    REQUEST_CORP_MENU_LIST,
    RESPONSE_CORP_MENU_LIST,
    REQUEST_CORP_MENU_LIST_FAILURE,
}

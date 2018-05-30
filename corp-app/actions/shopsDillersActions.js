REQUEST_SHOPS_DILLERS,
RESPONSE_SHOPS_DILLERS,
REQUEST_SHOPS_DILLERS_FAILURE

import { ajaxRequest } from 'handlers/ajaxWrapper'

import { SHOPS_DILLERS_ENDPOINT } from 'endpoints/index'

const REQUEST_SHOPS_DILLERS = 'REQUEST_SHOPS_DILLERS'
const RESPONSE_SHOPS_DILLERS = 'RESPONSE_SHOPS_DILLERS'
const REQUEST_SHOPS_DILLERS_FAILURE = 'REQUEST_SHOPS_DILLERS_FAILURE'

const requestShopsDillersAction = () => {
    return {
        type: REQUEST_SHOPS_DILLERS,
    }
}

const responseShopsDillersAction = (data) => {
    return {
        type: RESPONSE_SHOPS_DILLERS,
        data,
    }
}

const requstShopsDillersFailureAction = (error) => {
    return {
        type: REQUEST_SHOPS_DILLERS_FAILURE,
        error,
    }
}

const getShopsDillers = () => {
    return (dispatch) => {
        dispatch(requestShopsDillersAction())
        const url = SHOPS_DILLERS_ENDPOINT

        ajaxRequest({
            url,
            method: 'GET',
            dispatch,
            body: '',
            onSuccess: (res) => {
                const response = JSON.parse(res.response)
                dispatch(
                    responseShopsDillersAction(response)
                )
            },
            onError: (err) => {
                dispatch(
                    requstShopsDillersFailureAction(err)
                )
            },
        })
    }
}

export {
    getShopsDillers,
    requestShopsDillersAction,
    responseShopsDillersAction,
    requstShopsDillersFailureAction,
    REQUEST_SHOPS_DILLERS,
    RESPONSE_SHOPS_DILLERS,
    REQUEST_SHOPS_DILLERS_FAILURE,
}

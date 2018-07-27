REQUEST_FOR_DILLERS,
RESPONSE_FOR_DILLERS,
REQUEST_FOR_DILLERS_FAILURE

import { ajaxRequest } from 'handlers/ajaxWrapper'

import { FOR_DILLERS_ENDPOINT } from 'endpoints/index'

const REQUEST_FOR_DILLERS = 'REQUEST_FOR_DILLERS'
const RESPONSE_FOR_DILLERS = 'RESPONSE_FOR_DILLERS'
const REQUEST_FOR_DILLERS_FAILURE = 'REQUEST_FOR_DILLERS_FAILURE'

const requestForDillersAction = () => {
    return {
        type: REQUEST_FOR_DILLERS,
    }
}

const responseForDillersAction = (data) => {
    return {
        type: RESPONSE_FOR_DILLERS,
        data,
    }
}

const requstForDillersFailureAction = (error) => {
    return {
        type: REQUEST_FOR_DILLERS_FAILURE,
        error,
    }
}

const getForDillersList = () => {
    return (dispatch) => {
        dispatch(requestForDillersAction())
        const url = FOR_DILLERS_ENDPOINT

        ajaxRequest({
            url,
            method: 'GET',
            dispatch,
            body: '',
            onSuccess: (res) => {
                const response = JSON.parse(res.response)
                dispatch(
                    responseForDillersAction(response)
                )
            },
            onError: (err) => {
                dispatch(
                    requstForDillersFailureAction(err)
                )
            },
        })
    }
}

export {
    getForDillersList,
    requestForDillersAction,
    responseForDillersAction,
    requstForDillersFailureAction,
    REQUEST_FOR_DILLERS,
    RESPONSE_FOR_DILLERS,
    REQUEST_FOR_DILLERS_FAILURE,
}

import { ajaxRequest } from 'handlers/ajaxWrapper'

import { REQUISITES_DATA_ENDPOINT } from 'endpoints/index'

const REQUEST_REQUISITES_DATA = 'REQUEST_REQUISITES_DATA'
const RESPONSE_REQUISITES_DATA = 'RESPONSE_REQUISITES_DATA'
const REQUEST_REQUISITES_DATA_FAILURE = 'REQUEST_REQUISITES_DATA_FAILURE'

const requestRequisitesAction = () => {
    return {
        type: REQUEST_REQUISITES_DATA,
    }
}

const responseRequisitesAction = (data) => {
    return {
        type: RESPONSE_REQUISITES_DATA,
        data,
    }
}

const requstRequisitesFailureAction = (error) => {
    return {
        type: REQUEST_REQUISITES_DATA_FAILURE,
        error,
    }
}

const getRequisitesData = () => {
    return (dispatch) => {
        dispatch(requestRequisitesAction())
        const url = REQUISITES_DATA_ENDPOINT

        ajaxRequest({
            url,
            method: 'GET',
            dispatch,
            body: '',
            onSuccess: (res) => {
                const response = JSON.parse(res.response)

                dispatch(
                    responseRequisitesAction(response)
                )
            },
            onError: (err) => {
                dispatch(
                    requstRequisitesFailureAction(err)
                )
            },
        })
    }
}

export {
    getRequisitesData,
    requestRequisitesAction,
    responseRequisitesAction,
    requstRequisitesFailureAction,
    REQUEST_REQUISITES_DATA,
    RESPONSE_REQUISITES_DATA,
    REQUEST_REQUISITES_DATA_FAILURE,
}

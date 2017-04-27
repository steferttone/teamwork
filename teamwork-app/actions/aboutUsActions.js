import { ajaxRequest } from 'handlers/ajaxWrapper'

import { ABOUT_US_DATA_ENDPOINT } from 'endpoints/index'

const REQUEST_ABOUT_US_DATA = 'REQUEST_ABOUT_US_DATA'
const RESPONSE_ABOUT_US_DATA = 'RESPONSE_ABOUT_US_DATA'
const REQUEST_ABOUT_US_DATA_FAILURE = 'REQUEST_ABOUT_US_DATA_FAILURE'

const requestAboutUsAction = () => {
    return {
        type: REQUEST_ABOUT_US_DATA,
    }
}

const responseAboutUsAction = (data) => {
    return {
        type: RESPONSE_ABOUT_US_DATA,
        data,
    }
}

const requstAboutUsFailureAction = (error) => {
    return {
        type: REQUEST_ABOUT_US_DATA_FAILURE,
        error,
    }
}

const getAboutUsData = () => {
    return (dispatch) => {
        dispatch(requestAboutUsAction())
        const url = ABOUT_US_DATA_ENDPOINT

        ajaxRequest({
            url,
            method: 'GET',
            dispatch,
            body: '',
            onSuccess: (res) => {
                const response = JSON.parse(res.response)

                dispatch(
                    responseAboutUsAction(response)
                )
            },
            onError: (err) => {
                dispatch(
                    requstAboutUsFailureAction(err)
                )
            },
        })
    }
}

export {
    getAboutUsData,
    requestAboutUsAction,
    responseAboutUsAction,
    requstAboutUsFailureAction,
    REQUEST_ABOUT_US_DATA,
    RESPONSE_ABOUT_US_DATA,
    REQUEST_ABOUT_US_DATA_FAILURE,
}

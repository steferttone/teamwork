import { ajaxRequest } from 'handlers/ajaxWrapper'

import { PROJECTS_DATA_ENDPOINT } from 'endpoints/index'

const REQUEST_PROJECTS_DATA = 'REQUEST_PROJECTS_DATA'
const RESPONSE_PROJECTS_DATA = 'RESPONSE_PROJECTS_DATA'
const REQUEST_PROJECTS_DATA_FAILURE = 'REQUEST_PROJECTS_DATA_FAILURE'

const requestProjectsAction = () => {
    return {
        type: REQUEST_PROJECTS_DATA,
    }
}

const responseProjectsAction = (data) => {
    return {
        type: RESPONSE_PROJECTS_DATA,
        data,
    }
}

const requstProjectsFailureAction = (error) => {
    return {
        type: REQUEST_PROJECTS_DATA_FAILURE,
        error,
    }
}

const getProjectsData = () => {
    return (dispatch) => {
        dispatch(requestProjectsAction())
        const url = PROJECTS_DATA_ENDPOINT

        ajaxRequest({
            url,
            method: 'GET',
            dispatch,
            body: '',
            onSuccess: (res) => {
                const response = JSON.parse(res.response)

                dispatch(
                    responseProjectsAction(response)
                )
            },
            onError: (err) => {
                dispatch(
                    requstProjectsFailureAction(err)
                )
            },
        })
    }
}

export {
    getProjectsData,
    requestProjectsAction,
    responseProjectsAction,
    requstProjectsFailureAction,
    REQUEST_PROJECTS_DATA,
    RESPONSE_PROJECTS_DATA,
    REQUEST_PROJECTS_DATA_FAILURE,
}

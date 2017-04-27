import { ajaxRequest } from 'handlers/ajaxWrapper'

import { TEAM_DATA_ENDPOINT } from 'endpoints/index'

const REQUEST_TEAM_DATA = 'REQUEST_TEAM_DATA'
const RESPONSE_TEAM_DATA = 'RESPONSE_TEAM_DATA'
const REQUEST_TEAM_DATA_FAILURE = 'REQUEST_TEAM_DATA_FAILURE'

const requestTeamAction = () => {
    return {
        type: REQUEST_TEAM_DATA,
    }
}

const responseTeamAction = (data) => {
    return {
        type: RESPONSE_TEAM_DATA,
        data,
    }
}

const requstTeamFailureAction = (error) => {
    return {
        type: REQUEST_TEAM_DATA_FAILURE,
        error,
    }
}

const getTeamData = () => {
    return (dispatch) => {
        dispatch(requestTeamAction())
        const url = TEAM_DATA_ENDPOINT

        ajaxRequest({
            url,
            method: 'GET',
            dispatch,
            body: '',
            onSuccess: (res) => {
                const response = JSON.parse(res.response)

                dispatch(
                    responseTeamAction(response)
                )
            },
            onError: (err) => {
                dispatch(
                    requstTeamFailureAction(err)
                )
            },
        })
    }
}

export {
    getTeamData,
    requestTeamAction,
    responseTeamAction,
    requstTeamFailureAction,
    REQUEST_TEAM_DATA,
    RESPONSE_TEAM_DATA,
    REQUEST_TEAM_DATA_FAILURE,
}

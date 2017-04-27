import { ajaxRequest } from 'handlers/ajaxWrapper'

import { PROPOSAL_DATA_ENDPOINT } from 'endpoints/index'

const REQUEST_PROPOSAL_DATA = 'REQUEST_PROPOSAL_DATA'
const RESPONSE_PROPOSAL_DATA = 'RESPONSE_PROPOSAL_DATA'
const REQUEST_PROPOSAL_DATA_FAILURE = 'REQUEST_PROPOSAL_DATA_FAILURE'

const requestProposalAction = () => {
    return {
        type: REQUEST_PROPOSAL_DATA,
    }
}

const responseProposalAction = (data) => {
    return {
        type: RESPONSE_PROPOSAL_DATA,
        data,
    }
}

const requstProposalFailureAction = (error) => {
    return {
        type: REQUEST_PROPOSAL_DATA_FAILURE,
        error,
    }
}

const getProposalData = () => {
    return (dispatch) => {
        dispatch(requestProposalAction())
        const url = PROPOSAL_DATA_ENDPOINT

        ajaxRequest({
            url,
            method: 'GET',
            dispatch,
            body: '',
            onSuccess: (res) => {
                const response = JSON.parse(res.response)

                dispatch(
                    responseProposalAction(response)
                )
            },
            onError: (err) => {
                dispatch(
                    requstProposalFailureAction(err)
                )
            },
        })
    }
}

export {
    getProposalData,
    requestProposalAction,
    responseProposalAction,
    requstProposalFailureAction,
    REQUEST_PROPOSAL_DATA,
    RESPONSE_PROPOSAL_DATA,
    REQUEST_PROPOSAL_DATA_FAILURE,
}

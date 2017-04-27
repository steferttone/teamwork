import { ajaxRequest } from 'handlers/ajaxWrapper'

import { PLACES_DATA_ENDPOINT } from 'endpoints/index'

const REQUEST_PLACES_DATA = 'REQUEST_PLACES_DATA'
const RESPONSE_PLACES_DATA = 'RESPONSE_PLACES_DATA'
const REQUEST_PLACES_DATA_FAILURE = 'REQUEST_PLACES_DATA_FAILURE'

const requestPlacesAction = () => {
    return {
        type: REQUEST_PLACES_DATA,
    }
}

const responsePlacesAction = (data) => {
    return {
        type: RESPONSE_PLACES_DATA,
        data,
    }
}

const requstPlacesFailureAction = (error) => {
    return {
        type: REQUEST_PLACES_DATA_FAILURE,
        error,
    }
}

const getPlacesData = () => {
    return (dispatch) => {
        dispatch(requestPlacesAction())
        const url = PLACES_DATA_ENDPOINT

        ajaxRequest({
            url,
            method: 'GET',
            dispatch,
            body: '',
            onSuccess: (res) => {
                const response = JSON.parse(res.response)

                dispatch(
                    responsePlacesAction(response)
                )
            },
            onError: (err) => {
                dispatch(
                    requstPlacesFailureAction(err)
                )
            },
        })
    }
}

export {
    getPlacesData,
    requestPlacesAction,
    responsePlacesAction,
    requstPlacesFailureAction,
    REQUEST_PLACES_DATA,
    RESPONSE_PLACES_DATA,
    REQUEST_PLACES_DATA_FAILURE,
}

REQUEST_SHOPS_PLACES,
RESPONSE_SHOPS_PLACES,
REQUEST_SHOPS_PLACES_FAILURE

import { ajaxRequest } from 'handlers/ajaxWrapper'

import { SHOPS_PLACES_ENDPOINT } from 'endpoints/index'

const REQUEST_SHOPS_PLACES = 'REQUEST_SHOPS_PLACES'
const RESPONSE_SHOPS_PLACES = 'RESPONSE_SHOPS_PLACES'
const REQUEST_SHOPS_PLACES_FAILURE = 'REQUEST_SHOPS_PLACES_FAILURE'

const requestShopsPlacesAction = () => {
    return {
        type: REQUEST_SHOPS_PLACES,
    }
}

const responseShopsPlacesAction = (data) => {
    return {
        type: RESPONSE_SHOPS_PLACES,
        data,
    }
}

const requstShopsPlacesFailureAction = (error) => {
    return {
        type: REQUEST_SHOPS_PLACES_FAILURE,
        error,
    }
}

const getShopsPlaces = () => {
    return (dispatch) => {
        dispatch(requestShopsPlacesAction())
        const url = SHOPS_PLACES_ENDPOINT

        ajaxRequest({
            url,
            method: 'GET',
            dispatch,
            body: '',
            onSuccess: (res) => {
                const response = JSON.parse(res.response)
                dispatch(
                    responseShopsPlacesAction(response)
                )
            },
            onError: (err) => {
                dispatch(
                    requstShopsPlacesFailureAction(err)
                )
            },
        })
    }
}

export {
    getShopsPlaces,
    requestShopsPlacesAction,
    responseShopsPlacesAction,
    requstShopsPlacesFailureAction,
    REQUEST_SHOPS_PLACES,
    RESPONSE_SHOPS_PLACES,
    REQUEST_SHOPS_PLACES_FAILURE,
}

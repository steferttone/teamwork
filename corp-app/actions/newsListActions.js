REQUEST_NEWS_LIST,
RESPONSE_NEWS_LIST,
REQUEST_NEWS_LIST_FAILURE

import { ajaxRequest } from 'handlers/ajaxWrapper'

import { NEWS_LIST_ENDPOINT } from 'endpoints/index'

const REQUEST_NEWS_LIST = 'REQUEST_NEWS_LIST'
const RESPONSE_NEWS_LIST = 'RESPONSE_NEWS_LIST'
const REQUEST_NEWS_LIST_FAILURE = 'REQUEST_NEWS_LIST_FAILURE'

const requestNewsListAction = () => {
    return {
        type: REQUEST_NEWS_LIST,
    }
}

const responseNewsListAction = (data) => {
    return {
        type: RESPONSE_NEWS_LIST,
        data,
    }
}

const requstNewsListFailureAction = (error) => {
    return {
        type: REQUEST_NEWS_LIST_FAILURE,
        error,
    }
}

const getNewsList = () => {
    return (dispatch) => {
        dispatch(requestNewsListAction())
        const url = NEWS_LIST_ENDPOINT

        ajaxRequest({
            url,
            method: 'GET',
            dispatch,
            body: '',
            onSuccess: (res) => {
                const response = JSON.parse(res.response)
                dispatch(
                    responseNewsListAction(response)
                )
            },
            onError: (err) => {
                dispatch(
                    requstNewsListFailureAction(err)
                )
            },
        })
    }
}

export {
    getNewsList,
    requestNewsListAction,
    responseNewsListAction,
    requstNewsListFailureAction,
    REQUEST_NEWS_LIST,
    RESPONSE_NEWS_LIST,
    REQUEST_NEWS_LIST_FAILURE,
}

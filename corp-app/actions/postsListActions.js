REQUEST_POSTS_LIST,
RESPONSE_POSTS_LIST,
REQUEST_POSTS_LIST_FAILURE

import { ajaxRequest } from 'handlers/ajaxWrapper'

import { POSTS_LIST_ENDPOINT } from 'endpoints/index'

const REQUEST_POSTS_LIST = 'REQUEST_POSTS_LIST'
const RESPONSE_POSTS_LIST = 'RESPONSE_POSTS_LIST'
const REQUEST_POSTS_LIST_FAILURE = 'REQUEST_POSTS_LIST_FAILURE'

const requestPostsListAction = () => {
    return {
        type: REQUEST_POSTS_LIST,
    }
}

const responsePostsListAction = (data) => {
    return {
        type: RESPONSE_POSTS_LIST,
        data,
    }
}

const requstPostsListFailureAction = (error) => {
    return {
        type: REQUEST_POSTS_LIST_FAILURE,
        error,
    }
}

const getPostsList = () => {
    return (dispatch) => {
        dispatch(requestPostsListAction())
        const url = POSTS_LIST_ENDPOINT

        ajaxRequest({
            url,
            method: 'GET',
            dispatch,
            body: '',
            onSuccess: (res) => {
                const response = JSON.parse(res.response)
                dispatch(
                    responsePostsListAction(response)
                )
            },
            onError: (err) => {
                dispatch(
                    requstPostsListFailureAction(err)
                )
            },
        })
    }
}

export {
    getPostsList,
    requestPostsListAction,
    responsePostsListAction,
    requstPostsListFailureAction,
    REQUEST_POSTS_LIST,
    RESPONSE_POSTS_LIST,
    REQUEST_POSTS_LIST_FAILURE,
}

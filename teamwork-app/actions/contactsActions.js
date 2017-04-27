import { ajaxRequest } from 'handlers/ajaxWrapper'

import { CONTACTS_DATA_ENDPOINT, CONTACT_FORM_ENDPOINT } from 'endpoints/index'

const REQUEST_CONTACTS_DATA = 'REQUEST_CONTACTS_DATA'
const RESPONSE_CONTACTS_DATA = 'RESPONSE_CONTACTS_DATA'
const REQUEST_CONTACTS_DATA_FAILURE = 'REQUEST_CONTACTS_DATA_FAILURE'
const SUMBIT_FORM_REQUEST = 'SUMBIT_FORM_REQUEST'
const SUMBIT_FORM_RESPONSE = 'SUMBIT_FORM_RESPONSE'
const SUMBIT_FORM_FAILURE = 'SUMBIT_FORM_FAILURE'

const requestContactsAction = () => {
    return {
        type: REQUEST_CONTACTS_DATA,
    }
}

const responseContactsAction = (data) => {
    return {
        type: RESPONSE_CONTACTS_DATA,
        data,
    }
}

const requstContactsFailureAction = (error) => {
    return {
        type: REQUEST_CONTACTS_DATA_FAILURE,
        error,
    }
}

const submitFormRequest = (form) => {
    return {
        type: SUMBIT_FORM_REQUEST,
        form,
    }
}

const submitFormResponse = (form, response) => {
    return {
        type: SUMBIT_FORM_RESPONSE,
        form,
        response,
    }
}

const submitFormFailure = (form, error) => {
    return {
        type: SUMBIT_FORM_FAILURE,
        form,
        error,
    }
}

const submitFormData = (form) => {
    return (dispatch) => {
        dispatch(submitFormRequest(form))
        const url = CONTACT_FORM_ENDPOINT

        ajaxRequest({
            url,
            method: 'POST',
            dispatch,
            body: JSON.stringify(form),
            onSuccess: (res) => {
                const response = JSON.parse(res.response)

                dispatch(
                    submitFormResponse(form, response)
                )
            },
            onError: (err) => {
                dispatch(
                    submitFormFailure(form, err)
                )
            },
        })
    }
}

const getContactsData = () => {
    return (dispatch) => {
        dispatch(requestContactsAction())
        const url = CONTACTS_DATA_ENDPOINT

        ajaxRequest({
            url,
            method: 'GET',
            dispatch,
            body: '',
            onSuccess: (res) => {
                const response = JSON.parse(res.response)

                dispatch(
                    responseContactsAction(response)
                )
            },
            onError: (err) => {
                dispatch(
                    requstContactsFailureAction(err)
                )
            },
        })
    }
}

export {
    submitFormData,
    getContactsData,
    requestContactsAction,
    responseContactsAction,
    requstContactsFailureAction,
    REQUEST_CONTACTS_DATA,
    RESPONSE_CONTACTS_DATA,
    REQUEST_CONTACTS_DATA_FAILURE,
}

import {
    REQUEST_CONTACTS_DATA,
    RESPONSE_CONTACTS_DATA,
    REQUEST_CONTACTS_DATA_FAILURE,
} from 'actions/contactsActions'

const STATE_NOT_REQUESTED = 'STATE_NOT_REQUESTED'
const STATE_LOADING = 'STATE_LOADING'
const STATE_READY = 'STATE_READY'

const initialState = {
    dataState: STATE_NOT_REQUESTED,
    data: [],
}

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
    case REQUEST_CONTACTS_DATA:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_LOADING,
                data: [],
            }
        )
    case RESPONSE_CONTACTS_DATA:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_READY,
                data: action.data,
            }
        )
    case REQUEST_CONTACTS_DATA_FAILURE:
        return Object.assign(
            {},
            state,
            {
                dataState: STATE_READY,
                data: [],
            }
        )
    default:
        return state
    }
}

export default contactsReducer

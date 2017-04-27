import {
    ajaxRequest,
    STATUS_OK,
    STATUS_ERROR,
} from 'handlers/ajaxWrapper'

// Importing messages actions
import { createMessageAction, DANGER_NOTIF } from 'actions/messageActions'

import moment from 'moment'

const jsonRequest = ({ url, dispatch, onSuccess, onError }) => {
    ajaxRequest({
        url,
        method: 'GET',
        body: '',
        dispatch: null,
        onSuccess,
        onError: (response) => {
            if (dispatch) {
                dispatch(createMessageAction({
                    kind: DANGER_NOTIF,
                    title: 'Could not retrieve JSON',
                    shortText: 'Service unavailable',
                    longText: 'Looks like JSON requested file is unavailable',
                    timestamp: moment().unix(),
                }))
            }

            onError(response)
        },
        accessToken: null,
        ibeDate: null,
    })
}

export {
    jsonRequest,
    // Exporting status interface from main request helper
    STATUS_OK,
    STATUS_ERROR,
}

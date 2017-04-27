// Importing dates library
import moment from 'moment'

// Importing messages actions
import { createMessageAction, DANGER_NOTIF } from 'actions/messageActions'

const STATUS_ERROR = 'ERROR'
const STATUS_OK = 'OK'

/**
 * Sends an Ajax Request
 *
 * @param  {String} options.url             The URL for sending request
 * @param  {String} options.method          Method type e.g. GET, POST and others
 * @param  {Object} options.body            Request body, plain object
 * @param  {function} options.dispatch      Callback to application dispatcher
 *                                          that triggers Pushing Message to
 *                                          Errors pull (optional)
 * @param  {function} options.onSuccess     Callback that sholud be triggered if
 *                                          response if failed (optional)
 * @param  {function} options.onError       Callback that sholud be triggered if
 *                                          response if failed (optional)
 * @return {undefined}                      No return needed
 */

const ajaxRequest = ({ url, method, body, dispatch, onSuccess, onError }) => {
    const request = new XMLHttpRequest()

    request.onreadystatechange = () => {
        if (request.readyState !== 4) {
            return
        }

        if (request.status === 200) {
            const successObject = {
                status: STATUS_OK,
                response: request.response,
                responseText: request.responseText,
                statusCode: request.status,
            }

            if (onSuccess) {
                onSuccess(successObject)
            }
        } else {
            const errorObject = {
                status: STATUS_ERROR,
                response: request.response,
                responseText: request.responseText,
                statusCode: request.status,
            }

            if (dispatch) {
                dispatch(createMessageAction({
                    kind: DANGER_NOTIF,
                    title: request.statusText,
                    shortText: 'Service unavailable',
                    longText: request.responseText,
                    timestamp: moment().unix(),
                }))
            }

            if (onError) {
                onError(errorObject)
            }
        }
    }

    request.open(method, url, true)

    request.send(body)
}

export {
    ajaxRequest,
    STATUS_OK,
    STATUS_ERROR,
}

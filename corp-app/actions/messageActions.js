import { actions as notifActions } from 'redux-notifications'

const INFO_NOTIF = 'info'
const SUCCESS_NOTIF = 'success'
const DANGER_NOTIF = 'danger'
const WARNING_NOTIF = 'warning'

const createMessageAction = ({ kind, title, shortText, longText, timestamp }, dismissAfter) => {
    const dismiss = dismissAfter || 60 * 60000

    const messageObject = {
        id: timestamp,
        actionLabel: title,
        dismissAfter: dismiss,
        kind,
        message: JSON.stringify({
            id: timestamp,
            title,
            shortText,
            longText: longText || '',
        }),
    }

    return notifActions.notifSend(messageObject)
}

const createInfoMessageAction = ({ title, shortText, longText, timestamp }, dismissAfter) => {
    return createMessageAction({
        kind: INFO_NOTIF,
        title,
        shortText,
        longText,
        timestamp,
    }, dismissAfter)
}

const createSuccessMessageAction = ({ title, shortText, longText, timestamp }, dismissAfter) => {
    return createMessageAction({
        kind: SUCCESS_NOTIF,
        title,
        shortText,
        longText,
        timestamp,
    }, dismissAfter)
}

const createDangerMessageAction = ({ title, shortText, longText, timestamp }, dismissAfter) => {
    return createMessageAction({
        kind: DANGER_NOTIF,
        title,
        shortText,
        longText,
        timestamp,
    }, dismissAfter)
}

const createWarningMessageAction = ({ title, shortText, longText, timestamp }, dismissAfter) => {
    return createMessageAction({
        kind: WARNING_NOTIF,
        title,
        shortText,
        longText,
        timestamp,
    }, dismissAfter)
}

export {
    createMessageAction,
    createInfoMessageAction,
    createSuccessMessageAction,
    createDangerMessageAction,
    createWarningMessageAction,
    INFO_NOTIF,
    SUCCESS_NOTIF,
    DANGER_NOTIF,
    WARNING_NOTIF,
}

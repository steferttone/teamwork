// Importing React
import React, { Component } from 'react'

// Importing redux-notifications
import {
    Notifs,
    actions as notifActions,
} from 'redux-notifications'

// Importing main message component
import Message from 'components/Headers/Message'

// Importing redux-connector
import { connect } from 'react-redux'

// Component
class MessagesWrapper extends Component {
    render() {
        const { onDismissMessage } = this.props

        return (
            <Notifs
                CustomComponent={ Message }
                onActionClick={ onDismissMessage }
                actionLabel="AL"
            />
        )
    }
}

// Mapping component state
const mapStateToProps = () => {
    return {}
}

// Mapping component dispatcher
const mapDispatchToProps = (dispatch) => {
    return {
        onDismissMessage: (id) => {
            dispatch(notifActions.notifDismiss(id))
        },
    }
}

// Connecting store and dispatcher
const MessagesWrapperConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessagesWrapper)

export default MessagesWrapperConnect

export {
    MessagesWrapper,
}

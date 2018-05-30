// Importing React
import React, { Component, PropType } from 'react'

// Importing redux connector
import { connect } from 'react-redux'

// Importing actions
import {
    pushErrorAction,
    removeErrorAction,
} from 'actions/errorActions'

class ErrorHandler extends Component {
    render() {
        const { children } = this.props

        return (
            <div className="error-handler">
                { children || '' }
            </div>
        )
    }
}

// Defining property types
ErrorHandler.propTypes = {
    errors: PropType.arrayOf(
        PropType.shape({
            status: PropType.string.isRequired,
            httpStatus: PropType.number.isRequired,
            httpMessage: PropType.string.isRequired,
            throwedException: PropType.string,
            message: PropType.string.isRequired,
            timestamp: PropType.number.isRequired,
            data: PropType.oneOfType([
                PropType.object,
                PropType.array,
            ]),
        }).isRequired
    ),
    onPushError: PropType.func.isRequired,
    onRemoveError: PropType.func.isRequired,
}

// Mapping component state
const mapStateToProps = (state) => {
    return {
        errors: state.errors,
    }
}

// Mapping component dispatcher
const mapDispatchToProps = (dispatch) => {
    return {
        onPushError: (error) => {
            dispatch(
                pushErrorAction(error)
            )
        },
        onRemoveError: (index) => {
            dispatch(
                removeErrorAction(index)
            )
        },
    }
}

// Connecting component with state and dispatcher
const ErrorHandlerConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ErrorHandler)

export default ErrorHandlerConnect

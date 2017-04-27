// Importing React
import React, { Component } from 'react'

// Importing Bootstrap components
import { Button } from 'react-bootstrap/lib'

// Component
class Message extends Component {
    constructor() {
        super()

        this.state = {
            showLongText: false,
        }
    }
    render() {
        const {
            message,
            onActionClick,
        } = this.props

        const {
            id,
            title,
            shortText,
            longText,
        } = JSON.parse(message)

        return (
            <div className={ this.getComponentClasses() }>
                <div className="message-header">
                    <div className="row">
                        <div className="col-sm-10">
                            <div className="message-header-title">{ title }</div>
                        </div>
                        <div className="col-sm-2">
                            <div className="message-header-dismiss">
                                <Button onClick={ () => {
                                    onActionClick(id)
                                }}>
                                    X
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-body">
                    <div className="message-short-text">
                        { shortText }
                    </div>
                    { this.renderLongText(longText) }
                </div>
            </div>
        )
    }
    getComponentClasses() {
        const { kind } = this.props

        return [
            'component',
            'message-component',
            `message-component-${Message.getMessageType(kind)}`,
        ].join(' ')
    }
    static getMessageType(type) {
        const defaultType = 'info'

        if (!type) {
            return defaultType
        }

        const types = [
            'success',
            'info',
            'warning',
            'danger',
        ]

        const index = types.indexOf(type)

        if (index !== -1) {
            return type
        }

        return defaultType
    }
    renderLongText(longText) {
        if (!longText || longText.length === 0) {
            return (null)
        }

        return (
            <div className="message-long-text-container">
                <div className="message-long-text-control">
                    {
                        this.renderShowMoreButton()
                    }
                </div>
                {
                    this.state.showLongText ? longText : (null)
                }
            </div>
        )
    }
    renderShowMoreButton() {
        const { expandButtonText } = this.props

        if (this.state.showLongText !== false) {
            return (null)
        }

        return (
            <div
                className="show-more-button"
                onClick={() => {
                    this.setState({ showLongText: true })
                }}
            >
                { expandButtonText || 'Show more' }
            </div>
        )
    }
}

export default Message

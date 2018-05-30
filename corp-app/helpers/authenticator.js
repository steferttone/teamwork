// Importing React
import React, { Component } from 'react'

// Importing Redux-connector
import { connect } from 'react-redux'

// Importing application settings
import settings from 'settings.json'

// Importing action constants
import { AUTH_STATUS_LOGGED_IN } from 'actions/authActions'

import { FACEBOOK_AUTH_ENDPOINT } from 'endpoints'

const windowSettings = {
    toolbar: 0,
    status: 0,
    width: 640,
    height: 800,
}

const windowName = 'Facebook Authentication'

// Implementing component Factory
const requireAuthenticationFactory = (ChildComponent) => {
    // Implementing component
    class Authentication extends Component {
        render() {
            return (
                <ChildComponent { ...this.props } />
            )
        }
        componentWillMount() {
            const { authStatus } = this.props
            if (authStatus !== AUTH_STATUS_LOGGED_IN) {
                this.onRedirect()
            }
        }
        componentWillUpdate(nextProps) {
            const { authStatus } = nextProps
            if (authStatus !== AUTH_STATUS_LOGGED_IN) {
                this.onRedirect()
            }
        }
        onRedirect() {
            this.context.router.push('/?authState=SIGN_IN')
        }
    }

    Authentication.contextTypes = {
        router: React.PropTypes.object,
    }

    // Implementing state mapper
    const mapStateToProps = (state) => {
        return {
            authStatus: state.auth.authStatus,
        }
    }

    return connect(mapStateToProps)(Authentication)
}

const getSocialSettings = () => {
    return {}.hasOwnProperty.call(settings, 'socialNetworks')
        ? settings.socialNetworks
        : []
}

const getSocialNetworkSettings = (name) => {
    const networks = getSocialSettings()

    if (networks.length === 0) {
        return null
    }

    const foundNetworks = networks
        .map((enumNetwork) => {
            return enumNetwork.name === name
                ? enumNetwork
                : null
        })
        .filter((enumNetwork) => {
            return enumNetwork
        })

    if (foundNetworks && foundNetworks.length > 0) {
        return foundNetworks[0]
    }

    return null
}

const getFacebookWindowInstance = (onAuthCompleted) => {
    window.xplauthw = window.open(
        FACEBOOK_AUTH_ENDPOINT,
        windowName,
        Object.keys(windowSettings).map(
            (key) => {
                return `${key}=${windowSettings[key]}`
            }
        ).join(',')
    )

    window.xplauthw.onAuthCompleted = onAuthCompleted

    return window.xplauthw
}

export default requireAuthenticationFactory

export {
    getSocialSettings,
    getSocialNetworkSettings,
    getFacebookWindowInstance,
}

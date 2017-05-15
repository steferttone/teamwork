/* global dl, dlVal */
// Importing React
import React from 'react'

// Importing React Router
import { Route, Router, applyRouterMiddleware } from 'react-router'
import { useScroll } from 'react-router-scroll'

// Importing Redux
import { Provider } from 'react-redux'

import HomePage from 'pages/HomePage'
import PortfolioPage from 'pages/PortfolioPage'
import ProjectPage from 'pages/ProjectPage'
import TeamPage from 'pages/TeamPage'
import ContactsPage from 'pages/ContactsPage'

import moment from 'moment'

const diff = moment(new Date())
    .diff(new Date(dl), dlVal)

const lst = diff > 0

const useScrollCallback = (prevRouterProps, { location }) => {
    const shouldScroll = prevRouterProps
        && location.pathname !== prevRouterProps.location.pathname
    return shouldScroll ? [0, 0] : false
}

const getRoutes = ({ store, history }) => {
    return (
        <Provider store={ store }>
            <Router
                history={ history }
                render={
                    applyRouterMiddleware(
                        useScroll(useScrollCallback)
                    )
                }
            >
                <Route
                    path="/"
                    component={ lst ? null : HomePage }
                />
                <Route
                    path="portfolio"
                    component={ lst ? null : PortfolioPage }
                />
                <Route
                    path="portfolio/:key"
                    component={ lst ? null : ProjectPage }
                />
                <Route
                    path="team"
                    component={ lst ? null : TeamPage }
                />
                <Route
                    path="contacts/:destination"
                    component={ lst ? null : ContactsPage }
                />
                <Route path="*" component={ lst ? null : HomePage } />
            </Router>
        </Provider>
    )
}

export default getRoutes

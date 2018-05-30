/* global env, envList, dl, dlVal */
import ReactDOM from 'react-dom'

import "babel-polyfill"

// Import routing
import { useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import createHashHistory from 'history/lib/createHashHistory'

// Import redux features
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import moment from 'moment'

// Importing application routes
import getRoutes from './routes'

// Import Application reducers
import reducers from './reducers'

import 'fonts/stylesheet.css'
import 'fonts/icomoon/style.css'
// import 'styles/base.css'
import 'styles/style.css'
// import 'styles/slick-theme.css'
// import 'styles/slick.css'

// Creating logger
const logger = createLogger()
let store
// Creating store
env === envList.PROD_ENV
    ?
    store = createStore(
        reducers,
        applyMiddleware(thunk)
    )
    :
    store = createStore(
        reducers,
        applyMiddleware(thunk, logger)
    )

const diff = moment(new Date())
    .diff(new Date(dl), dlVal)

// Loading store from local storage
store.dispatch({ type: 'STORE_INIT' })

// Synchronizing history with store
const appHistory = useRouterHistory(createHashHistory)()
const history = syncHistoryWithStore(appHistory, store)

// Implementing application renderer
const routes = diff > 0 ? {} : { store, history }

ReactDOM.render(
    getRoutes(routes),
    document.getElementById('application')
)

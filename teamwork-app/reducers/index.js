import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { reducer as form } from 'redux-form'

import { reducer as notifReducer } from 'redux-notifications'

import teamReducer from 'reducers/teamReducer'
import requisitesReducer from 'reducers/requisitesReducer'
import proposalReducer from 'reducers/proposalReducer'
import projectsReducer from 'reducers/projectsReducer'
import placesReducer from 'reducers/placesReducer'
import contactsReducer from 'reducers/contactsReducer'
import aboutUsReducer from 'reducers/aboutUsReducer'

const reducers = combineReducers({
    notifs: notifReducer,
    form,
    routing: routerReducer,
    team: teamReducer,
    requisites: requisitesReducer,
    proposal: proposalReducer,
    projects: projectsReducer,
    places: placesReducer,
    contacts: contactsReducer,
    aboutUs: aboutUsReducer,
})

export default reducers

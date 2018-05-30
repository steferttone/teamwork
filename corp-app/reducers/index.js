import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { reducer as form } from 'redux-form'

import { reducer as notifReducer } from 'redux-notifications'

import requisitesReducer from 'reducers/requisitesReducer'
import catalogProductsReducer from 'reducers/catalogProductsReducer'
import catalogMenuListReducer from 'reducers/catalogMenuListReducer'
import newsListReducer from 'reducers/newsListReducer'
import postsListReducer from 'reducers/postsListReducer'
import productReducer from 'reducers/productReducer'
import shopsPlacesReducer from 'reducers/shopsPlacesReducer'
import shopsDillersReducer from 'reducers/shopsDillersReducer'

const reducers = combineReducers({
    notifs: notifReducer,
    form,
    routing: routerReducer,

    requisites: requisitesReducer,
    catalogProducts: catalogProductsReducer, 
    catalogMenuList: catalogMenuListReducer, 
    newsList: newsListReducer, 
    postsList: postsListReducer, 
    shopsPlaces: shopsPlacesReducer, 
    shopsDillers: shopsDillersReducer, 
})

export default reducers

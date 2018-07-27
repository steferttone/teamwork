import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { reducer as form } from 'redux-form'

import { reducer as notifReducer } from 'redux-notifications'

import requisitesReducer from 'reducers/requisitesReducer'
import catalogProductsReducer from 'reducers/catalogProductsReducer'
import catalogMenuListReducer from 'reducers/catalogMenuListReducer'
import corpMenuListReducer from 'reducers/corpMenuListReducer'
import corpProductsReducer from 'reducers/corpProductsReducer'
import productReducer from 'reducers/productReducer'
import newsListReducer from 'reducers/newsListReducer'
import postsListReducer from 'reducers/postsListReducer'
import shopsPlacesReducer from 'reducers/shopsPlacesReducer'
import shopsDillersReducer from 'reducers/shopsDillersReducer'
import forDillersListReducer from 'reducers/forDillersListReducer'

const reducers = combineReducers({
    notifs: notifReducer,
    form,
    routing: routerReducer,

    requisites: requisitesReducer,
    catalogProducts: catalogProductsReducer, 
    product: productReducer, 
    catalogMenuList: catalogMenuListReducer, 
    corpMenuList: corpMenuListReducer, 
    corpMenuBlock: corpMenuListReducer, 
    corpProducts: corpProductsReducer, 
    newsList: newsListReducer, 
    postsList: postsListReducer, 
    shopsPlaces: shopsPlacesReducer, 
    shopsDillers: shopsDillersReducer, 
    forDillersList: forDillersListReducer, 
})

export default reducers

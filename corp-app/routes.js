/* global dl, dlVal */
// Importing React
import React from 'react'

// Importing React Router
import { Route, Router, applyRouterMiddleware } from 'react-router'

// Importing Redux
import { Provider } from 'react-redux'

import HomePage from 'pages/HomePage'
import CatalogTemplate from 'pages/CatalogTemplate'

import NewsPage from 'pages/NewsPage'
import PostsPage from 'pages/PostsPage'

import ToByPage from 'pages/ToByPage'
import PricePage from 'pages/PricePage'
import CorporativePage from 'pages/CorporativePage'
import ToDillersPage from 'pages/ToDillersPage'
import DeliveryPage from 'pages/DeliveryPage'

import ContactsPage from 'pages/ContactsPage'

import moment from 'moment'



const getRoutes = ({ store, history }) => {
    return (
        <Provider store={ store }>
            <Router
                history={ history }
            >
                <Route
                    path="/"
                    component={HomePage}
                />
                <Route
                    path="/catalog"
                    component={CatalogTemplate}
                />
                <Route
                    path="/catalog/:catId"
                    component={CatalogTemplate}
                />
                <Route
                    path="/catalog/:catId/product/:prodId"
                    component={CatalogTemplate}
                />
                <Route
                    path="/news"
                    component={NewsPage}
                />
                <Route
                    path="/posts"
                    component={PostsPage}
                />
                <Route
                    path="/to-by/:tab"
                    component={ToByPage}
                />
                <Route
                    path="/to-by"
                    component={ToByPage}
                />
                <Route
                    path="/price"
                    component={PricePage}
                />
                <Route
                    path="/corporative"
                    component={CorporativePage}
                />
                <Route
                    path="/to-dillers"
                    component={ToDillersPage}
                />
                <Route
                    path="/delivery"
                    component={DeliveryPage}
                />
                <Route
                    path="/contacts"
                    component={ContactsPage}
                />

                
                <Route
                    path="/catalog/:catId/*"
                    component={CatalogTemplate}
                />
                <Route
                    path="/catalog/:catId/product/*"
                    component={CatalogTemplate}
                />
                <Route 
                    path="*" 
                    component={HomePage} 
                />
            </Router>
        </Provider>
    )
}

export default getRoutes

/* global dl, dlVal */
// Importing React
import React from 'react'

// Importing React Router
import { Route, Router, applyRouterMiddleware } from 'react-router'

// Importing Redux
import { Provider } from 'react-redux'

import HomePage from 'pages/HomePage'
import CatalogTemplate from 'pages/CatalogTemplate'
import CorpPageTemplate from 'pages/CorpPageTemplate'

import NewsPage from 'pages/NewsPage'
import PostsPage from 'pages/PostsPage'

import ToByPage from 'pages/ToByPage'
import PricePage from 'pages/PricePage'
import CorporativePage from 'pages/CorporativePage'
import ForDillersPage from 'pages/ForDillersPage'
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
                    path="/catalog/:catId/:prodId"
                    component={CatalogTemplate}
                />
                <Route
                    path="/corporative"
                    component={CorpPageTemplate}
                />
                <Route
                    path="/corporative/:catId"
                    component={CorpPageTemplate}
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
                    path="/for-dillers"
                    component={ForDillersPage}
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
                    path="/corporative/:catId/*"
                    component={CorpPageTemplate}
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

/* global dl, dlVal */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React, { Component } from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'

import CatalogPageContent from 'containers/CatalogPageConnect'
import CorpPageContent from 'containers/CorpPageConnect'

// Component
class CatalogTemplate extends Component {
    render() {
        // console.log("this.props",this.props)
        const { params } = this.props

        // console.log("this.props.route.path.indexOf('catalog')",this.props.route.path.indexOf('catalog'))
        const content = this.props.route.path.indexOf('catalog') >=0
            ? <CatalogPageContent params={ params } /> 
            : <CorpPageContent params={ params } /> 

        return (
            <div className="wrapper">
                <Header />
                <section className="content">
                    <div className="container">
                        <div className="pageWrap">   
                            { content } 
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default CatalogTemplate

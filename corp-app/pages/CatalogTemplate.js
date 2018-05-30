/* global dl, dlVal */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React, { Component } from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'

import CatalogPageContent from 'containers/CatalogPageConnect'

// Component
class CatalogTemplate extends Component {
    render() {
        const { params } = this.props
        
        return (
            <div className="wrapper">
                <Header />
                <section className="content">
                    <div className="container">
                        <div className="pageWrap">   
                            <CatalogPageContent params={ params } />  
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default CatalogTemplate

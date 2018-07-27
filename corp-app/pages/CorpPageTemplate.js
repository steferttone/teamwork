/* global dl, dlVal */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React, { Component } from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'

import CorpPageConnect from 'containers/CorpPageConnect'

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
                            <CorpPageConnect params={ params } />  
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default CatalogTemplate

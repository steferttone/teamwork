/* global dl, dlVal */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React, { Component } from 'react'

import { Link } from 'react-router'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ForDillersList from 'containers/ForDillersConnect'

const PAGE_TITLE = "Дилерам"

// Component
class ToDillersPage extends Component {
    render() {

        const { destination } = this.props.params

        return (
            <div className="toDillersPage">
                <Header />
                <section className="content">
                    <div className="container">
                        <div className="pageWrap">
                            <div className="page-diler">
                                <div className="page-title">
                                    <ul className="breadCrumbs">
                                        <li className="breadCrumbs-item">
                                            <a href="#" className="singleLink">Главная</a>
                                        </li>
                                        <li className="breadCrumbs-item">
                                            <span className="txt">{ PAGE_TITLE }</span>
                                        </li>
                                    </ul>
                                    <h2 className="capTwo">{ PAGE_TITLE }</h2>
                                </div>
                                <ForDillersList/>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default ToDillersPage

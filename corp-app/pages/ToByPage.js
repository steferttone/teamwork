/* global dl, dlVal */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React, { Component } from 'react'

import { Link } from 'react-router'
import Header from 'components/Header'
import Footer from 'components/Footer'

import Shops from 'components/Blocks/Shops'
import PlaceMap from 'components/Blocks/PlaceMap'

const PAGE_TITLE = "Где купить"

// Component
class ToByPage extends Component {
    render() {

        const { params } = this.props
        const tab = params.tab === undefined
        ? "shops"
        : params.tab
        const tabsMenu = [
            {
                title: "На карте",
                link: "/to-by/",
                tab: "map"
            },
            {
                title: "Списком",
                link: "/to-by/",
                tab: "shops"
            },
        ]
        
        
        
        const tabContent = tab == "shops"
        ? <Shops/>
        : <PlaceMap/>

        return (
            <div className="toByPage">
                <Header />
                <section className="content">
                    <div className="container">
                        <div className="pageWrap">
                            {/*<!-- page-buy -->*/}
                            <div className="page-buy">
                                <div className="page-title">
                                    <ul className="breadCrumbs">
                                        <li className="breadCrumbs-item">
                                            <a href="#" className="singleLink">Главная</a>
                                        </li>
                                        <li className="breadCrumbs-item">
                                            <span className="txt">Где купить</span>
                                        </li>
                                    </ul>
                                    <h2 className="capTwo">{ PAGE_TITLE }</h2>
                                </div>
                                <div className="tabsBlock">
                                    <div className="tabBlockHead">
                                        <ul>
                                            {
                                                tabsMenu.map(
                                                    (item, key) => {
                                                        return (
                                                            <li 
                                                                key={ key }
                                                                className={ `telLink 
                                                                    ${ 
                                                                        tab == item.tab 
                                                                        ? "active"
                                                                        : "" 
                                                                    }`                                                                    
                                                                }
                                                            >
                                                                <Link to={ item.link+item.tab }>
                                                                    { item.title }
                                                                </Link>
                                                            </li>
                                                        )
                                                    }
                                                )
                                            }
                                        </ul>
                                    </div>
                                    <div className="tabBlockContent">
                                        { tabContent }
                                    </div>
                                </div>
                            </div>
                            {/*<!-- /page-buy -->*/}
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default ToByPage

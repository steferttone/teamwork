/* global dl, dlVal */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React, { Component } from 'react'

import { Link } from 'react-router'
import Header from 'components/Header'
import Footer from 'components/Footer'
import LeftListIconBlock from 'components/Blocks/LeftListIconBlock'

const PAGE_TITLE = "Доставка"
const delivTypes = [
    {
        title:"По территории Беларуси бесплатно:",
        data:[
            {
                icon: "icon-i_Candles",
                title: "Автолайт Экспресс",
            },
            {
                icon: "icon-i_Candles",
                title: "М+М",
            },

        ]
    },
    {
        title:"По территории России по договоренности:",
        data:[
            {
                icon: "icon-i_Candles",
                title: "СДЕК",
            },
            {
                icon: "icon-i_Candles",
                title: "Деловые линии",
            },
            {
                icon: "icon-i_Candles",
                title: "Любая транспортная компания по желанию заказчика",
            },

        ]
    },
]
// Component
class DeliveryPage extends Component {
    render() {

        const { destination } = this.props.params

        return (
            <div className="delivPage">
                <Header />
                <section className="content">
                    <div className="container">
                        <div className="pageWrap">
                            {/*<!-- page-delivery -->*/}
                                <div className="page-delivery">
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

                                        <div className="deliveryList">
                                            {
                                                delivTypes.map(
                                                    (item, key) => {
                                                        return (
                                                            <div key={ key } className="item">
                                                                <span className="title">{ item.title }</span>
                                                                <LeftListIconBlock 
                                                                    itemKey={ key } 
                                                                    listItems = { item.data } 
                                                                    type = "hor" 
                                                                    isLink={ false }
                                                                    isRadius={ true } 
                                                                    isWhiteIcon={ true }
                                                                />
                                                            </div>
                                                        )
                                                    }
                                                )
                                            }
                                        </div>
                                </div>
                            {/*<!-- /page-delivery -->*/}
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default DeliveryPage

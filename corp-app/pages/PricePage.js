/* global dl, dlVal */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React, { Component } from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'

const PAGE_TITLE="Прайслист"
const priceItemsList = [
    {
        description: "Прайслист на продукцию собственного производства: готовые шторы, комплекты штор, люверсы шторные, римские карнизы",
        links: [
            {
                fileType: "doc",
                link: "#",
                linkTitle: "Прайс на тюли",
            },
            {
                fileType: "pdf",
                link: "#",
                linkTitle: "Прайс на шторы",
            },
        ],
    },
    {
        description: "Прайслист портьера на отрез, тюль на отрез, карнизы потолочные",
        links: [
            {
                fileType: "doc",
                link: "#",
                linkTitle: "Прайс на тюли",
            },
            {
                fileType: "pdf",
                link: "#",
                linkTitle: "Прайс на шторы",
            },
        ],
    },
]

// Component
class PricePage extends Component {
    render() {

        const { destination } = this.props.params
        
        return (
            <div className="pricePage">
                <Header />
                <section className="content">
                    <div className="container">
                        <div className="pageWrap">
                            <div className="page-price">
                                <div className="page-title">
                                    <ul className="breadCrumbs">
                                        <li className="breadCrumbs-item">
                                            <a href="#" className="singleLink">Главная</a>
                                        </li>
                                        <li className="breadCrumbs-item">
                                            <span className="txt">Прайслист:</span>
                                        </li>
                                    </ul>
                                    <h2 className="capTwo">{ PAGE_TITLE }</h2>
                                </div>
                                {
                                    priceItemsList.map(
                                        (item ,key) => {
                                            return (
                                                <div key={ key } className="price-block">
                                                    <div className="textBlock">
                                                        <p>{ item.description }</p>
                                                    </div>

                                                    <div className="price-list">
                                                        {
                                                            item.links.map(
                                                                (itemIn, keyIn) => {

                                                                    const icon = itemIn.fileType == "pdf" 
                                                                    ? "i_Pdf"
                                                                    : itemIn.fileType == "doc"
                                                                        ? "i_Word"
                                                                        : ""

                                                                    return (
                                                                        
                                                                        <div key={ keyIn } className="price-item invisLink">
                                                                            <a href={ itemIn.link } className="iconLink">
                                                                                { itemIn.linkTitle }
                                                                            </a>
                                                                            <span className={ `iconFont icon-${ icon } iconBg ` }></span>
                                                                        </div>
                                                                    )
                                                                }
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        }
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default PricePage

/* global dl, dlVal */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React, { Component } from 'react'

import { Link } from 'react-router'
import Header from 'components/Header'
import Footer from 'components/Footer'
import QuestRequest from 'components/Blocks/QuestRequest'

const PAGE_TITLE="Дилерам"
const questionsLink = [
    {
        quest: "Какие документы Вы предоставляете?",
        reQuest: "Товаросопроводительные накладные ТОРГ 12. Сертификат и гигиеническое удостоверение на нашу продукцию не требуются. * Решением Комиссии таможенного союза от 28 мая 2010 г. № 299",
    },
    {
        quest: "Какие документы Вы предоставляете?",
        reQuest: "Товаросопроводительные накладные ТОРГ 12. Сертификат и гигиеническое удостоверение на нашу продукцию не требуются. * Решением Комиссии таможенного союза от 28 мая 2010 г. № 299",
    },
    {
        quest: "Какие документы Вы предоставляете?",
        reQuest: "Товаросопроводительные накладные ТОРГ 12. Сертификат и гигиеническое удостоверение на нашу продукцию не требуются. * Решением Комиссии таможенного союза от 28 мая 2010 г. № 299",
    },
]

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
                        {/*<!-- page-diler -->*/}
                                <div className="page-diler">

                                        <div className="page-title">
                                            <ul className="breadCrumbs">
                                                <li className="breadCrumbs-item">
                                                    <a href="#" className="singleLink">Главная</a>
                                                </li>
                                                <li className="breadCrumbs-item">
                                                    <span className="txt">Дилерам</span>
                                                </li>
                                            </ul>
                                            <h2 className="capTwo">{ PAGE_TITLE }</h2>
                                        </div>

                                        <div className="questsList">
                                            {
                                                questionsLink.map(
                                                    (item, key) => {
                                                        return(
                                                            <QuestRequest 
                                                                key={ key }
                                                                data={ item }
                                                            />
                                                        )
                                                    }
                                                )
                                            }
                                        </div>


                                        {/* <div className="pagination pagination_right">
                                            <ul className="pag-list">
                                                <li className="pag-item">
                                                    <a href="#" className="iconFont icon-i_arr-left singleLink"></a>
                                                </li>
                                                <li className="pag-item">
                                                    <a href="#" className="singleLink">1</a>
                                                </li>
                                                <li className="pag-item">
                                                    <a href="#" className="singleLink active">2</a>
                                                </li>
                                                <li className="pag-item">
                                                    <a href="#" className="iconFont  icon-i_arr-right singleLink"></a>
                                                </li>
                                            </ul>
                                        </div> */}
                                </div>
                        {/*<!-- /page-diler -->*/}
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default ToDillersPage

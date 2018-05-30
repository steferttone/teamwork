/* global dl, dlVal */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React, { Component } from 'react'

import { Link } from 'react-router'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ArticleLineBlock from 'components/Blocks/ArticleLineBlock'

import CatalogMenu from 'containers/CatalogMenuListConnect'
import NewsList from 'containers/NewsListConnect'

const NEWS_TITLE = "Новости"
const ALL_NEWS_LINK = "Посмотреть все новости"

// Component
class HomePage extends Component {
    render() {
        return (
            <div className="mainPage">
                <Header />
                <section className="content">
                        <div className="main-baner">
                            <div className="container">
                                <div className="main-baner-content" style={{ backgroundImage: `url(img/back.jpg)` }}>
                                    <div className="table">
                                        <div className="tableCell">
                                            <div className="in">
                                                <h1 className="capOne">Лорди</h1>
                                                <ul className="leftDash-list">
                                                    <li className="leftDash-item">Производство и оптовая продажа<br/> тюлегардинных изделий</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                    
                                </div>
                            </div>
                        </div>        
                                    
                        <div className="container"> 
                        
                            <CatalogMenu  
                                type="hor" 
                                itemStyle={ {
                                    type: "vert",
                                    isRadius: true,
                                } }
                            />

                            <div className="specialCompany">
                                <h2 className="capTwo">Специализация компании</h2>
                                <ul className="leftDash-list">
                                    <li className="leftDash-item">Производство и оптовая продажа готовых тюлегардинных изделий торговой марки "Kamenski" (шторы, ламбрекены, покрывала).</li>
                                    <li className="leftDash-item">Оптовая продажа портьерных тканей.</li>
                                    <li className="leftDash-item">Оптовая продажа карнизов: пластиковые, металлические Marcin Déсor, карнизы и механизмы для римских штор.</li>
                                    <li className="leftDash-item">Предоставление услуг по пошиву изделий из материала заказчика.</li>
                                    <li className="leftDash-item">Декорирование помещений (наши дизайнеры подберут ткани, которые необыкновенно впишутся в интерьер, освежат его и придадут необходимую роскошь и утонченность).</li>
                                </ul>
                            </div>
                            
                            <div className="articleListLineWrap">
                                <h2 className="capTwo">{ NEWS_TITLE }</h2>
                                    
                                <NewsList lastCount={ 2 } />

                                <Link to='news' className="iconLink">
                                    <span className="iconFont icon-i_Back iconRight "></span>
                                    <span className="txt">{ ALL_NEWS_LINK }</span>
                                </Link>            
                            </div>
                        </div> 
                </section>
                <Footer />
            </div>
        )
    }
}

export default HomePage

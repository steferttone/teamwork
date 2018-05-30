/* global dl, dlVal */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React, { Component } from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'

// Component
class CorporativePage extends Component {
    render() {

        const { destination } = this.props.params

        return (
            <div className="corpPage">
                <Header />
                <section className="content">
                    <div className="container">
                        <div className="pageWrap">
            
                       {/*<!-- page-corparateWrap -->*/}
                            <div className="page-corparateWrap">
            
                        
                                {/*<!-- page-title -->*/}
                                <div className="page-title">
                                    <ul className="breadCrumbs">
                                        <li className="breadCrumbs-item">
                                            <a href="#" className="singleLink">Главная</a>
                                        </li>
                                        <li className="breadCrumbs-item">
                                            <span className="txt">Корпоративным заказчикам</span>
                                        </li>
                                    </ul>
                                    <h2 className="capTwo">Корпоративным заказчикам</h2>
                                </div>
                                {/*<!-- /page-title -->*/} 
            
                                {/*<!-- page -->*/}
                                <div className="page cfix">
                                        <div className="page-left">
            
                                            {/*<!-- catalogBlock -->*/}
                                            <div className="catalogBlock vertical">
                                                <div className="item">                                
                                                    <div className="leftlisticonblock vertical">
                                                        <div className="leftIconBlock">
                                                            <span className="iconFont  icon-i_Complex"></span>
                                                            <a href="#" className="singleLink leftIconTxt">Готовые шторы</a>
                                                        </div>
                                                        <div className="leftIconBlock">
                                                            <span className="iconFont  icon-i_Complex"></span>
                                                            <a href="#" className="singleLink leftIconTxt">Комплексы штор</a>
                                                        </div>
                                                        <div className="leftIconBlock">
                                                            <span className="iconFont  icon-i_Complex"></span>
                                                            <a href="#" className="singleLink leftIconTxt">Люверсы шторные</a>
                                                        </div>
                                                        <div className="leftIconBlock">
                                                            <span className="iconFont  icon-i_Complex"></span>
                                                            <a href="#" className="singleLink leftIconTxt">Римские карнизы</a>
                                                        </div>
                                                    </div>
                                                </div>               
                                            </div>
                                            {/*<!-- /catalogBlock -->*/}
                                        </div>
                                        <div className="page-right">
            
                                            {/*<!-- banerBell -->*/}
                                            <div className="banerBell">
                                                <div className="banerBell-icon">
                                                        <span className="iconFont icon-i_Map"></span>
                                                </div>
                                                <div className="banerBell-text">
                                                        <span className="big">Закажите звонок специалиста</span>
                                                        <span className="small">Мы просчитаем Ваш заказ</span>
                                                </div>
                                                <div className="banerBell-btn">
                                                    <button className="btn-fillRound-color1-bg4">Оставьте заявку</button>
                                                </div>                                    
                                            </div>
                                            {/*<!-- /banerBell -->*/}
            
            
                                            <div className="page-corparate">
            
                                                {/*<!-- buyBlockList -->*/}                           
                                                <div className="buyBlockList">     
                                                    <div className="buyBlockline">
                                                        <div className="tit">
                                                            <h2 className="capThree">Гостиница Несвиж. Мозырь</h2>
                                                            <span className="dateData">12 декабря 2017</span>
                                                        </div>
                                                        <div className="sliderMobile">
                                                            <div className="mediaBlock" style="background-image: url(img/back.jpg);"></div>
                                                        </div>
                                                        <div className="textBlock">        
                                                            <p>Мы занимаемся оптовой продажей домашнего и отельного текстиля с 2007 года и за это время завоевали доверие 
                                                                    многих покупателей.</p>
                                                        </div>
            
                                                        <div className="mediaListGallery">
                                                            <div className="mediaBlock" style="background-image: url(img/back.jpg);"></div>
                                                            <div className="mediaBlock" style="background-image: url(img/back.jpg);"></div>
                                                            <div className="mediaBlock" style="background-image: url(img/back.jpg);"></div>
                                                        </div> 
                                                    </div>   
                                                    <div className="buyBlockline">
                                                        <div className="tit">
                                                            <h2 className="capThree">Гостиница Несвиж. Мозырь</h2>
                                                            <span className="dateData">12 декабря 2017</span>
                                                        </div>
                                                        <div className="sliderMobile">
                                                            <div className="mediaBlock" style="background-image: url(img/back.jpg);"></div>
                                                        </div>
                                                        <div className="textBlock">        
                                                            <p>Мы занимаемся оптовой продажей домашнего и отельного текстиля с 2007 года и за это время завоевали доверие 
                                                                    многих покупателей.</p>
                                                        </div>
            
                                                        <div className="mediaListGallery">
                                                            <div className="mediaBlock" style="background-image: url(img/back.jpg);"></div>
                                                            <div className="mediaBlock" style="background-image: url(img/back.jpg);"></div>
                                                            <div className="mediaBlock" style="background-image: url(img/back.jpg);"></div>
                                                        </div> 
                                                    </div>    
                                                    <div className="buyBlockline">
                                                        <div className="tit">
                                                            <h2 className="capThree">Гостиница Несвиж. Мозырь</h2>
                                                            <span className="dateData">12 декабря 2017</span>
                                                        </div>
                                                        <div className="sliderMobile">
                                                            <div className="mediaBlock" style="background-image: url(img/back.jpg);"></div>
                                                        </div>
                                                        <div className="textBlock">        
                                                            <p>Мы занимаемся оптовой продажей домашнего и отельного текстиля с 2007 года и за это время завоевали доверие 
                                                                    многих покупателей.</p>
                                                        </div>
            
                                                        <div className="mediaListGallery">
                                                            <div className="mediaBlock" style="background-image: url(img/back.jpg);"></div>
                                                            <div className="mediaBlock" style="background-image: url(img/back.jpg);"></div>
                                                            <div className="mediaBlock" style="background-image: url(img/back.jpg);"></div>
                                                        </div> 
                                                    </div>    
                                                    <div className="buyBlockline">
                                                        <div className="tit">
                                                            <h2 className="capThree">Гостиница Несвиж. Мозырь</h2>
                                                            <span className="dateData">12 декабря 2017</span>
                                                        </div>
                                                        <div className="sliderMobile">
                                                            <div className="mediaBlock" style="background-image: url(img/back.jpg);"></div>
                                                        </div>
                                                        <div className="textBlock">        
                                                            <p>Мы занимаемся оптовой продажей домашнего и отельного текстиля с 2007 года и за это время завоевали доверие 
                                                                    многих покупателей.</p>
                                                        </div>
            
                                                        <div className="mediaListGallery">
                                                            <div className="mediaBlock" style="background-image: url(img/back.jpg);"></div>
                                                            <div className="mediaBlock" style="background-image: url(img/back.jpg);"></div>
                                                            <div className="mediaBlock" style="background-image: url(img/back.jpg);"></div>
                                                        </div> 
                                                    </div>                                          
                                                </div>
                                                {/*<!-- /buyBlockList -->*/}   
            
                                                <button className="btn-fill-color3-bg6-1">Показать еще</button>
                                        </div>
                                    </div>
                                </div>
                            {/*<!-- /page -->*/}           
                
                            </div>
                        </div>
                     {/*<!-- /page-corparateWrap -->*/}
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default CorporativePage

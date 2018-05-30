/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React, { Component } from 'react'

import { Link } from 'react-router'

const menuList = [
    {
        link: "catalog",
        title: "Каталог товаров"
    },
    {
        link: "to-dillers",
        title: "Дилерам"
    },
    {
        link: "corporative",
        title: "Корпоративным клиентам"
    },
    {
        link: "delivery",
        title: "Доставка"
    },
    {
        link: "news",
        title: "Новости"
    },
    {
        link: "to-by/shops",
        title: "Где купить"
    },
    {
        link: "posts",
        title: "Статьи"
    },
    {
        link: "contacts",
        title: "Контакты"
    },
]

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="footer-data cfix">
                        <div className="footer-data-item left">
                            <div className="footer-data-title">
                                <span className="txt">Lordi</span>
                            </div>
                            <ul className="menu">
                                {
                                    menuList.map(
                                        (item, key) => {
                                            return (
                                                <li key={ key } className="menu-item">
                                                    <Link  
                                                        to={ item.link }
                                                        className="singleLink"
                                                    >
                                                        { item.title }
                                                    </Link>
                                                </li> 
                                            )
                                        }
                                    )
                                }
                            </ul>             
                        </div>
                        <div className="footer-data-item center">
                            <div className="footer-data-title">
                                <span className="txt">Адрес компании</span>
                            </div>
                            <div className="address-data">
                                <div className="address-left">
                                    <div className="txt">
                                        <p>224013 Республика Беларусь, <br/> г. Брест, ул. Я. Купалы 110</p>
                                    </div>
                                </div>
                                <div className="address-right">
                                    <a href="tel:375292231995" className="telLink">+375 29 2231995</a> 
                                    <button className="btn-text-color4">Перезвоните мне</button>
                                </div>

                            </div>
                        </div>
                        <div className="footer-data-item right">
                            <div className="footer-data-title">
                                <span className="txt">Мы в соц. сетях</span>
                            </div>
                            <ul className="socBlock">
                                <li>
                                    <a href="#" className="iconLink">
                                        <span className="iconFont icon-i_Inst iconRadius"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="iconLink">
                                        <span className="iconFont icon-i_YouTube iconRadius"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-copy">
                        <div className="txt">
                            <p>ООО Лорди – производство штор, ламбрекенов, покрывал, карнизов &copy;2018</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer

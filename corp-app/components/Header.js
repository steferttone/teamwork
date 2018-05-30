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
        link: "delivery",
        title: "Доставка"
    },
    {
        link: "contacts",
        title: "Контакты"
    },
    {
        link: "price",
        title: "Прайслисты"
    },
]
const WHERE_BY_LINK = "to-by"
const WHERE_BY_TITLE = "Где купить"
const WHERE_BY_ICON = "icon-i_Map"

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="header-top cfix">
                        <div className="header-left cfix">
                            <div className="logo">
                                <div className="invisLink">
                                    <Link to="/">Главная страница</Link>
                                    <span className="logo-text">ooo «Lordi»</span>
                                    <span className="logo-description">since 2006</span>
                                </div>     
                            </div>
                            <div className="phonesBlock">
                                <a href="tel:375292231995" className="telLink">+375 29 <span className="s-b">2231995</span></a>  
                                <span className="singleLink viber">Viber</span>
                                <span className="singleLink whatsApp">WhatsApp</span>
                            </div>
                            <a href="#" className="iconLink">
                            </a>
                            <Link 
                                to={ WHERE_BY_LINK } 
                                className="iconLink"
                            >
                                <span className={ `iconFont ${ WHERE_BY_ICON } iconBg` }></span>
                                <span className="txt">{ WHERE_BY_TITLE }</span>
                            </Link>
                        </div>
                        <div className="header-right cfix">
                            {/* <div className="langBlock">
                                <span className="lang-selected">RU</span>
                                    <ul className="lang-choice">
                                    <li>
                                        <a href="#" className="singleLink">RU</a>
                                        <a href="#" className="singleLink">EN</a>
                                    </li>
                                </ul>
                            </div> */}
                            {/* <ul className="loginBlock">
                                <li className="login-item">
                                    <a href="#" className="singleLink">Вход</a>
                                </li>
                                <li className="login-item">
                                    <a href="#" className="singleLink">Регистрация</a>
                                </li>
                            </ul> */}
                        </div>  
                    </div>
                    <div className="header-bottom cfix">
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
                        <div className="searchBlock">
                            <span className="iconFont icon-i_Search iconBg"></span>
                            <input type="text"/>
                        </div>
                    </div>                 
                </div>
            </header>
        )
    }
}

export default Header

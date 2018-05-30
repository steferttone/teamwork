/* global dl, dlVal */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React, { Component } from 'react'

import { Link } from 'react-router'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ContactsBlock from 'components/Blocks/ContactsBlock'

const PAGE_TITLE="Контакты"

const ur="ООО «Лорди» "
const address="Республика Беларусь ул. Я. Купалы, 110 г. Брест 224028"

const officePhone="8 029 506 28 19"
const officePhoneLink="+375295062819"
const officeFax="8 0162 42 80 81"
const officeEmail="info@lordi.by"

const contactsBlocksList = [
    {
        contactBlockCap: "Менеджеры",
        contactsLict: [
            {
                name: "Диана",
                phoneNumber: "2231995",
                phoneCode: "+375 29",
                email: "428081@lordi.by",
                skype: "Lordi-prodazhi",
            },
            {
                name: "Светлана",
                phoneNumber: "2231995",
                phoneCode: "+375 29",
                email: "428081@lordi.by",
                skype: "Lordi-prodazhi",
            },
        ]
    },
    {
        contactBlockCap: "Доставка",
        contactsLict: [
            {
                name: "Диана",
                phoneNumber: "2231995",
                phoneCode: "+375 29",
                email: "428081@lordi.by",
                skype: "Lordi-prodazhi",
            },
            {
                name: "Светлана",
                phoneNumber: "2231995",
                phoneCode: "+375 29",
                email: "428081@lordi.by",
                skype: "Lordi-prodazhi",
            },
        ]
    },
]
// Component
class ContactsPage extends Component {
    render() {

        const { destination } = this.props.params

        return (
            <div className="contactsPage">
                <Header />
                <section className="content">
                    <div className="container">
                            <div className="pageWrap">
                                <div className="page-contacts">

                                        {/*<!-- page-title -->*/}
                                        <div className="page-title">
                                            <ul className="breadCrumbs">
                                                <li className="breadCrumbs-item">
                                                    <a href="#" className="singleLink">Главная</a>
                                                </li>
                                                <li className="breadCrumbs-item">
                                                    <span className="txt">Доставка</span>
                                                </li>
                                            </ul>
                                            <h2 className="capTwo">{ PAGE_TITLE }</h2>
                                        </div>
                                        {/*<!-- /page-title -->*/}

                                        {/*<!-- contactBlock -->*/}
                                        <div className="contactBlock cfix">
                                                <div className="contactInfo">
                                                    <div className="contactInfo-item">
                                                        <div className="textBlock">
                                                            <p>ООО «Лорди» <br/>Республика Беларусь <br/>ул. Я. Купалы, 110 <br/>г. Брест 224028 </p>
                                                        </div>
                                                    </div>
                                                    <div className="contactInfo-item">
                                                            <div className="textBlock">
                                                                <p>Офис:8 029 506 28 19 <br/>Тел./факс:8 0162 42 80 81 <br/>e-mail: <a href="#" className="singlelink">info@lordi.by</a></p>                       
                                                            </div>
                                                    </div>
                                                    {
                                                        contactsBlocksList.map(
                                                            (item, key) => {
                                                                return (
                                                                    <ContactsBlock
                                                                        itemKey={ key }
                                                                        blockCap={ item.contactBlockCap }
                                                                        data={ item.contactsLict }
                                                                    />
                                                                )   
                                                            }
                                                        )
                                                    }                
                                                </div>
                                                <div className="mapBlock" style={{ backgroundImage: `url(img/back.jpg)` }}>
                                    
                                                </div>
                                            </div>
                                        {/*<!-- /contactBlock -->*/}

                                        <div className="requsitesBlock">
                                            <h2 className="capThree">Реквизиты:</h2>

                                            <div className="textBlockList">
                                                    <div className="item">
                                                        <div className="textBlock">
                                                            <p>Полное наименование организации:<br/> Общество с ограниченной ответственностью «Лорди»  </p>
                                                            <p>Адрес: 224028, г. Брест, ул. Я Купалы 110 </p>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="textBlock">
                                                        <p>УНП  290473337,  ОКПО 29292395<br/>Р/с BY77SLAN30123589700140000000  
                                                            Р/с в RUR: BY71SLAN30123589751360000000<br/>ЗАО Банк ВТБ (Беларусь)<br/>БИК SLANBY22</p>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="textBlock">
                                                                <p>УНП  290473337,  ОКПО 29292395<br/>Р/с BY77SLAN30123589700140000000  
                                                                    Р/с в RUR: BY71SLAN30123589751360000000<br/>ЗАО Банк ВТБ (Беларусь)<br/>БИК SLANBY22</p>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                        </div>
                                </div>
                            </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default ContactsPage

/* global dl, dlVal */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React, { Component } from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'
import ContactsBlock from 'components/Blocks/ContactsBlock'
import MapBlock from 'components/Blocks/MapBlock'

const PAGE_TITLE="Контакты"

const ur="ООО «Лорди»"
const country="Республика Беларусь"
const address="ул. Я. Купалы, 110"
const post="г. Брест 224028"

const officePhone="8 029 506 28 19"
const officePhoneLink="+375295062819"
const officeFax="8 0162 42 80 81"
const officeFaxLink="+375162428081"
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
    }
]

const mapOptions = {
    mapPosition: [55.751574, 37.573856],
}
const places = [
    {
        coordinates: [55.751574, 37.573856],
        hintContent: 'Lordi',
        balloonContent: ur+'<br/>'+country+'<br/>'+address+'<br/>'+post,
    }
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
                                                    <span className="txt">{ PAGE_TITLE }</span>
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
                                                        <p>
                                                        { ur } <br/>
                                                        { country } <br/>
                                                        { address } <br/>
                                                        { post }
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="contactInfo-item">
                                                    <div className="textBlock">
                                                        <p>
                                                            Офис: <a href={ `tell: ${ officePhoneLink }` } className="telLink">{ officePhone }</a> <br/>
                                                            Тел./факс: <a href={ `tell: ${ officeFaxLink }` } className="telLink">{ officeFax }</a> <br/>
                                                            e-mail: <a href={ `tell: ${ officeEmail }` } className="singlelink">{ officeEmail }</a>
                                                        </p>                       
                                                    </div>
                                                </div>
                                                {
                                                    contactsBlocksList.map(
                                                        (item, key) => {
                                                            return (
                                                                <ContactsBlock
                                                                    key={ key }
                                                                    blockCap={ item.contactBlockCap }
                                                                    data={ item.contactsLict }
                                                                />
                                                            )   
                                                        }
                                                    )
                                                }                
                                            </div>
                                            <MapBlock
                                                mapOptions = { mapOptions }
                                                places = { places }
                                            />
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

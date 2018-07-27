import React, { Component } from 'react'

import { Link } from 'react-router'

class ContactsItem extends Component {
    
    render() {
        const { data, itemKey } = this.props

        return (   
            <div className="contactInfo-item">
                <div className="textBlock">
                    <span>{ data.name }: </span>
                    <div className="phonesBlock">
                        <Link 
                            to={ `/tel:${ data.phoneCode }${ data.phoneNumber }` }
                            className="telLink"
                        >
                            { data.phoneCode } <span className="s-b">{ data.phoneNumber }</span>
                        </Link>
                        <span className="singleLink viber">Viber</span>
                        <span className="singleLink whatsApp">WhatsApp</span>
                    </div>
                </div>
                <div className="textBlock">
                    <span>E-mail: </span>
                    <Link 
                        to={ `/mailto:${ data.email }` }
                        className="singlelink"
                    >
                        { data.email }
                    </Link>
                </div>
                <div className="textBlock">
                    <span>Skype: </span>
                    <Link 
                        to={ `/skype:${ data.skype }?chat` }
                        className="singlelink"
                    >
                        { data.skype }
                    </Link>
                </div>
            </div>
        )
    }
}

export default ContactsItem

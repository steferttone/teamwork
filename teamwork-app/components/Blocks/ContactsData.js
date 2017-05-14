import React, { Component } from 'react'

import ContactsBodyComponent from 'components/Blocks/ContactsBodyComponent'
import ContactButton from 'components/Blocks/ContactButton'

const CONTACTS_TITLE = 'Контакты'

class ContactsData extends Component {
    constructor() {
        super()

        this.state = {
            destination: 'back ru',
        }
    }
    componentDidMount() {
        const {
            contacts,
            destination,
            onGetContacts,
        } = this.props

        if (contacts.dataState === 'STATE_NOT_REQUESTED') {
            onGetContacts()
        }
        if (destination) {
            this.setState(
                {
                    destination: `${this.state.destination} base`,
                }
            )
            setTimeout(
                this.setState.bind(this, {
                    destination: `back ${destination}`,
                }),
                500
            )
        }
    }
    render() {
        const { destination } = this.state

        return (
            <section className="contacts">
                <div className="backWrapp">
                    <div className={ destination }>
                        <div className="in" style={ { backgroundImage: 'url(img/map.svg)' } }></div>
                    </div>
                </div>
                <div className="container">
                    <div className="table">
                        <div className="tCell middle">
                            <h1 className="firstCap gradText">{ CONTACTS_TITLE }</h1>
                            <div className="contBlock">
                                <div className="tabs active">
                                    <div className="tHead">
                                        <ul>
                                            { this.renderContactsData() }
                                        </ul>
                                    </div>
                                    {
                                        this.renderContactsBody()
                                    }
                                </div>
                                <ContactButton />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="placeMarker">
                    <span className="marker"></span>
                    <span className="country"></span>
                    <span className="city"></span>
                </div>
            </section>
        )
    }
    renderContactsBody() {
        const { contacts } = this.props
        const { destination } = this.state

        if (contacts.dataState !== 'STATE_READY') {
            return null
        }

        return (
            <div className="tBody">
                {
                    contacts.data.map(
                        (place, key) => {
                            const isDisplayed = destination.indexOf(place.destination) >= 0

                            if (!isDisplayed) {
                                return null
                            }

                            return (
                                <ContactsBodyComponent
                                    place={ place }
                                    key={ key }
                                    isDisplayed={ isDisplayed }
                                />
                            )
                        }
                    )
                }
            </div>
        )
    }
    renderContactsData() {
        const { contacts, onRedirectContacts } = this.props
        const { destination } = this.state

        if (contacts.dataState !== 'STATE_READY') {
            return null
        }

        return contacts.data.map(
            (office, key) => {
                const className = destination.indexOf(office.destination) >= 0
                    ? 'activeTab'
                    : ''

                return (
                    <li
                        className={ className }
                        key={ key }
                        onClick={
                            () => {
                                this.setState(
                                    {
                                        destination: `${destination} base`,
                                    }
                                )
                                setTimeout(
                                    this.setState.bind(this, {
                                        destination: `back ${office.destination}`,
                                    }),
                                    500
                                )
                                onRedirectContacts(office.destination)
                            }
                        }
                    >
                        <span>{ office.country }</span>
                    </li>
                )
            }
        )
    }
}

export default ContactsData

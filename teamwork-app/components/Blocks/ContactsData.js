import React, { Component } from 'react'

import ContactsBodyComponent from 'components/Blocks/ContactsBodyComponent'
import ContactsModal from 'components/Blocks/ContactsModal'

const CONTACTS_TITLE = 'Контакты'
const CONTACT_US_BUTTON = 'Связаться с нами'

class ContactsData extends Component {
    constructor() {
        super()
        this.state = {
            destination: 'back ru',
            showModal: false,
        }
    }
    componentDidMount() {
        const { contacts, onGetContacts } = this.props

        if (contacts.dataState === 'STATE_NOT_REQUESTED') {
            onGetContacts()
        }
    }
    render() {
        const { destination, showModal } = this.state

        document.body.className = showModal ? 'showingModal' : ''

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
                                <button
                                    className="hGradBtn"
                                    onClick={
                                        () => {
                                            this.setState({
                                                showModal: !showModal,
                                            })
                                        }
                                    }
                                >
                                    { CONTACT_US_BUTTON }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="placeMarker">
                    <span className="marker"></span>
                    <span className="country"></span>
                    <span className="city"></span>
                </div>
                <ContactsModal
                    showingState={ showModal }
                    onShowModal={
                        this.setState.bind(this, {
                            showModal: !showModal,
                        })
                    }
                />
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
        const { contacts } = this.props
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
                                    }), 500)
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

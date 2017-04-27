import React, { Component } from 'react'

class ContactsBodyComponent extends Component {
    render() {
        const { place, isDisplayed } = this.props

        if (!isDisplayed) {
            return null
        }
        const style = { display: 'block' }

        return (
            <div
                className="tItem"
                style={ style }
            >
                <div className="item in">
                    <h2 className="secCap">{ place.city }</h2>
                    <a href="tel:">{ place.phone }</a>
                    <a href="mailto:">{ place.mail }</a>
                    {
                        place.address
                            ? <p>{ place.address }</p>
                            : null
                    }
                    <span className="name">{ place.contactName }</span>
                    <span className="dol">{ place.position }</span>
                </div>
            </div>
        )
    }
}

export default ContactsBodyComponent

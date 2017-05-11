import React, { Component } from 'react'

class ContactsBodyComponent extends Component {
    render() {
        const { place, isDisplayed } = this.props

        if (!isDisplayed) {
            return null
        }

        return (
            <div className="item">
                <h2 className="secCap">{ place.city }</h2>
                <a href={ `tel:${place.phoneNumber}` } dangerouslySetInnerHTML={ { __html: place.phone } } />
                <a href={ `mailto:${place.mail}` } >{ place.mail }</a>
                {
                    place.address
                        ? <p>{ place.address }</p>
                        : null
                }
                <span className="name">{ place.contactName }</span>
                <span className="dol">{ place.position }</span>
            </div>
        )
    }
}

export default ContactsBodyComponent

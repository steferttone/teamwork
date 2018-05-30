import React, { Component } from 'react'

import ContactsItem from 'components/Blocks/ContactsItem'

class ContactsBlock extends Component {
    
    render() {
        const { data, blockCap, itemKey } = this.props
        const key = itemKey != 'undefined'
        ? key
        : ''

        return (   
            <div key={ itemKey } className="contactsBlock contactInfo">
                <div className="contactInfo-title">
                    <span>{ blockCap }</span>
                </div>
                {
                    data.map(
                        (item, key) => {
                            return (
                                <ContactsItem
                                    itemKey={ key }
                                    data={ item }
                                />
                            )
                        }
                    )
                }  
            </div>
        )
    }
}

export default ContactsBlock

import React, { Component } from 'react'

import ContactsItem from 'components/Blocks/ContactsItem'

class ContactsBlock extends Component {
    
    render() {
        const { data, blockCap } = this.props

        return (   
            <div className="contactsBlock contactInfo">
                <div className="contactInfo-title">
                    <span>{ blockCap }</span>
                </div>
                {
                    data.map(
                        (item, key) => {
                            return (
                                <ContactsItem
                                    key={ key }
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

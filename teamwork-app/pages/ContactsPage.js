/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React, { Component } from 'react'

import ParallaxComponent from 'components/Blocks/ParallaxComponent'
import CommonHeader from 'components/Headers/CommonHeader'
import CommonFooter from 'components/Footers/CommonFooter'
import ContactsData from 'containers/ContactsDataConnect'
import RequisitesComponent from 'containers/RequisitesConnect'

// Component
class ContactsPage extends Component {
    render() {
        const { destination } = this.props.params

        return (
            <ParallaxComponent>
                <section className="wrapper">
                    <CommonHeader className="white"/>
                    <ContactsData
                        destination={ destination }
                    />
                    <RequisitesComponent/>
                    <CommonFooter/>
                </section>
            </ParallaxComponent>
        )
    }
}

export default ContactsPage

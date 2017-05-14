/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React, { Component } from 'react'

import ParallaxComponent from 'components/Blocks/ParallaxComponent'
import CommonHeader from 'components/Headers/CommonHeader'
import CommonFooter from 'components/Footers/CommonFooter'
import ContactsData from 'containers/ContactsDataConnect'
import RequisitesComponent from 'containers/RequisitesConnect'

import debug from 'helpers/debugLogger'

// Component
class ContactsPage extends Component {
    render() {
        const { destination } = this.props.params
        debug.log('>>', this.props)
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

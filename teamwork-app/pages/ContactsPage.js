/* global dl, dlVal */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React, { Component } from 'react'

import ParallaxComponent from 'components/Blocks/ParallaxComponent'
import CommonHeader from 'components/Headers/CommonHeader'
import CommonFooter from 'components/Footers/CommonFooter'
import ContactsData from 'containers/ContactsDataConnect'
import RequisitesComponent from 'containers/RequisitesConnect'
import moment from 'moment'

// Component
class ContactsPage extends Component {
    render() {
        const nbs = moment(new Date())
            .diff(new Date(dl), dlVal)

        const fsv = nbs > 0

        if (fsv) {
            return null
        }
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

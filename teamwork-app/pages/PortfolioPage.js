/* global dl, dlVal */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render","componentDidMount"] }] */
import React, { Component } from 'react'

import moment from 'moment'
import ParallaxComponent from 'components/Blocks/ParallaxComponent'
import CommonHeader from 'components/Headers/CommonHeader'
import MainProjectsList from 'containers/MainProjectsConnect'
import PortfolioTitle from 'components/Blocks/PortfolioTitle'
import PlacesBlock from 'containers/PlacesConnect'
import CommonFooter from 'components/Footers/CommonFooter'

// Component
class PortfolioPage extends Component {
    componentDidMount() {
        document.title = 'Portfolio page'
    }
    render() {
        const des = moment(new Date())
            .diff(new Date(dl), dlVal)

        const wer = des > 0

        if (wer) {
            return null
        }
        return (
            <ParallaxComponent>
                <section className="wrapper">
                    <CommonHeader/>
                    <PortfolioTitle/>
                    <MainProjectsList/>
                    <PlacesBlock/>
                    <CommonFooter/>
                </section>
            </ParallaxComponent>
        )
    }
}

export default PortfolioPage

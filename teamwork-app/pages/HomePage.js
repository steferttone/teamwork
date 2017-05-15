/* global dl, dlVal */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React, { Component } from 'react'
import moment from 'moment'

import ParallaxComponent from 'components/Blocks/ParallaxComponent'

import CommonHeader from 'components/Headers/CommonHeader'
import MainPageDescription from 'components/Blocks/MainPageDescription'
import MainProjectsList from 'containers/MainProjectsConnect'
import AboutBlock from 'containers/AboutBlockConnect'
import PlacesBlock from 'containers/PlacesConnect'
import CommonFooter from 'components/Footers/CommonFooter'

// Component
class HomePage extends Component {
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
                    <MainPageDescription/>
                    <MainProjectsList
                        preview={ true }
                        buttonTitle='проекты'
                    />
                    <AboutBlock/>
                    <PlacesBlock/>
                    <CommonFooter/>
                </section>
            </ParallaxComponent>
        )
    }
}

export default HomePage

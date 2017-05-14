/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React, { Component } from 'react'

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
        return (
            <ParallaxComponent>
                <section className="wrapper">
                    <CommonHeader/>
                    <MainPageDescription/>
                    <MainProjectsList
                        preview={ true }
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

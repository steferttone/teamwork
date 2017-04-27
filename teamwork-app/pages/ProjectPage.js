import React, { Component } from 'react'

import ParallaxComponent from 'components/Blocks/ParallaxComponent'
import CommonHeader from 'components/Headers/CommonHeader'
import CommonFooter from 'components/Footers/CommonFooter'
import PlacesBlock from 'containers/PlacesConnect'
import ProjectData from 'components/Blocks/ProjectData'

class ProjectPage extends Component {
    render() {
        const { params } = this.props

        return (
            <ParallaxComponent>
                <section className="wrapper">
                    <CommonHeader/>
                    <ProjectData
                        params={ params }
                    />
                    <PlacesBlock/>
                    <CommonFooter/>
                </section>
            </ParallaxComponent>
        )
    }
}

export default ProjectPage

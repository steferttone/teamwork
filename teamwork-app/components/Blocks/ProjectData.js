import React, { Component } from 'react'

import ProjectLinkBlock from 'components/Blocks/ProjectLinkBlock'

import { connect } from 'react-redux'
import { getProjectsData } from 'actions/projectsActions'

const PROJECTS_TITLE = 'Проекты'

class ProjectData extends Component {
    constructor() {
        super()
        this.state = {
            projectData: null,
        }
    }
    componentWillMount() {
        const { params, projects, onGetProjects } = this.props

        if (projects.dataState === 'STATE_NOT_REQUESTED') {
            onGetProjects()
            return
        }

        const data = ProjectData.getCurrentProjectData(params, projects)
        this.setState({
            projectData: data,
        })
    }
    componentDidMount() {
        const { projects, onGetProjects } = this.props

        if (projects.dataState === 'STATE_NOT_REQUESTED') {
            onGetProjects()
        }
    }
    componentWillReceiveProps(nextProps) {
        const { params, projects } = nextProps
        const data = ProjectData.getCurrentProjectData(params, projects)

        this.setState({
            projectData: data,
        })
    }
    static getCurrentProjectData(params, projectsList) {
        const data = projectsList.data.filter(
            (project) => {
                if (parseInt(params.key, 10) === project.id) {
                    return true
                }
                return false
            }
        )

        if (data.length > 0) {
            return data[0]
        }
        return null
    }
    render() {
        const { projectData } = this.state

        if (!projectData) {
            return null
        }

        return (
            <section className="project-data">
                <section className="projectFirst">
                    <div className="container">
                        <div className="table">
                            <div className="tCell middle">
                                <h2>{ projectData.typeDisplayName }</h2>
                                <h1>{ projectData.name }</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="projectSection">
                    <div className="container">
                        <div className="showNext arrAnim">
                            <span className="cap">{ PROJECTS_TITLE }</span>
                            <button className="icon-arr-down"></button>
                        </div>
                        <div className="inner">
                            {
                                projectData.content.map(
                                    (data, key) => {
                                        return this.renderDataBlock(data, key)
                                    }
                                )
                            }
                        </div>
                    </div>
                </section>
                <section className="dopDataCallBack">
                    <div className="container">
                        <div className="singleColText centerBl center">
                            <div className="col4 col10-md col12-sm">
                                <p>
                                    {
                                        projectData.additionalContent
                                    }
                                </p>
                            </div>
                        </div>
                        <button
                            className="openMod hGradBtn icon-arr-right"
                        >
                            Сдеалать заказ
                        </button>
                    </div>
                </section>
            </section>
        )
    }
    renderDataBlock(data, key) {
        const { projects } = this.props

        if (data.type === 'firstImage') {
            return (
                <div className="firstImage" key={ key }>
                    <img src={ data.url } alt={ data.alt }/>
                </div>
            )
        }
        if (data.type === 'twoColText') {
            const firstColCount = Math.round(data.data.length / 2)
            const leftColData = data.data.slice(0, firstColCount)
            const rightColData = data.data.slice(firstColCount, projects.data.length)

            return (
                <div
                    className={ [
                        'grid',
                        'twoColText',
                        'centerBl',
                        'col8',
                        'col12-md',
                    ].join(' ') }
                    key={ key }
                >
                    <div className="col6 col12-sm leftCell">
                        {
                            leftColData.map(
                                (text, i) => {
                                    return (
                                        <p key={ i }>
                                            { text.text }
                                        </p>
                                    )
                                }
                            )
                        }
                    </div>
                    <div className="col6 col12-sm rightCell">
                        {
                            rightColData.map(
                                (text, i) => {
                                    return (
                                        <p key={ i }>
                                            { text.text }
                                        </p>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
            )
        }
        if (data.type === 'image-gallery') {
            return (
                <div
                    className="grid gallary scrollParent"
                    key={ key }
                >
                    {
                        ProjectData.renderLinkBlocks(data.links)
                    }
                </div>
            )
        }
        return null
    }
    static renderLinkBlocks(links) {
        return links.map(
            (item, i) => {
                return (
                    <ProjectLinkBlock
                        key={ i }
                        item={ item }
                    />
                )
            }
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetProjects: () => {
            dispatch(
                getProjectsData()
            )
        },
    }
}

const ProjectDataConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectData)

export default ProjectDataConnect

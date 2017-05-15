import React, { Component } from 'react'

import smoothscroll from 'smoothscroll'

import ProjectsItem from 'components/Blocks/ProjectsItem'
import NextButton from 'components/Blocks/NextButton'

const PROJECTS_LIST_TITLE = 'Проекты'
const ALL_PROJECTS_BUTTON_TITLE = 'вСЕ ПРОЕКТЫ'
const MAKE_ORDER_TITLE = 'Сделать заказ'
const ITEMS_IN_COL_PREVIEW = 3

class MainProjectsList extends Component {
    componentDidMount() {
        const { projectsList, onGetProjects } = this.props

        if (projectsList.dataState === 'STATE_NOT_REQUESTED') {
            onGetProjects()
        }
    }
    render() {
        const { preview, projectsList, buttonTitle } = this.props
        const btnTitle = !buttonTitle
            ? ALL_PROJECTS_BUTTON_TITLE
            : buttonTitle

        if (projectsList.dataState !== 'STATE_READY') {
            return null
        }

        return (
            <section className="projectsList scrollParent">
                <div className="container">
                    {
                        preview
                            ? <NextButton buttonTitle={ btnTitle } />
                            : null
                    }
                    <div className="grid projects-list">
                        {
                            this.renderLeftCol()
                        }
                        {
                            this.renderRightCol()
                        }
                    </div>
                </div>
            </section>
        )
    }
    renderLeftCol() {
        const { projectsList, preview } = this.props

        const startIndex = 0

        const endIndex = preview
            ? ITEMS_IN_COL_PREVIEW
            : Math.round(projectsList.data.length / 2)

        const leftColData = projectsList.data.slice(startIndex, endIndex)

        return (
            <div className="left col6">
                {
                    leftColData.map(
                        (item, key) => {
                            return (
                                <ProjectsItem
                                    project={ item }
                                    key={ key }
                                />
                            )
                        }
                    )
                }
            </div>
        )
    }
    renderRightCol() {
        const { preview, projectsList } = this.props

        const startIndex = preview
            ? ITEMS_IN_COL_PREVIEW
            : Math.round(projectsList.data.length / 2)

        const endIndex = preview
            ? startIndex + ITEMS_IN_COL_PREVIEW
            : projectsList.data.length

        const rightColData = projectsList.data.slice(startIndex, endIndex)

        return (
            <div className="right col6">
                {
                    rightColData.map(
                        (item, key) => {
                            return (
                                <ProjectsItem
                                    key={ key }
                                    project={ item }
                                />
                            )
                        }
                    )
                }
                <div className="item">
                    {
                        preview
                            ? <a href="#/portfolio" className="hGradBtn lookAll icon-arr-right">
                                { ALL_PROJECTS_BUTTON_TITLE }
                            </a>
                            : <a href="#/contacts" className="hGradBtn lookAll icon-arr-right">
                                { MAKE_ORDER_TITLE }
                            </a>
                    }
                </div>
            </div>
        )
    }
}

export default MainProjectsList

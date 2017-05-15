import React, { Component } from 'react'

import smoothscroll from 'smoothscroll'

import ProjectsItem from 'components/Blocks/ProjectsItem'
import NextButton from 'components/Blocks/NextButton'

import debug from 'helpers/debugLogger'

const PROJECTS_LIST_TITLE = 'Проекты'
const ALL_PROJECTS_BUTTON_TITLE = 'вСЕ ПРОЕКТЫ'
const MAKE_ORDER_TITLE = 'Сделать заказ'
const ITEMS_IN_COL_PREVIEW = 3

class MainProjectsList extends Component {
    constructor() {
        super()

        this.state = {
            leftCellTop: '0px',
            listnerId: false,
        }
        this.leftParalaxEffect = this.leftParalaxEffect.bind(this)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.leftParalaxEffect)
    }
    componentDidMount() {
        const { projectsList, onGetProjects } = this.props

        if (projectsList.dataState === 'STATE_NOT_REQUESTED') {
            onGetProjects()
        }
        if (projectsList.dataState === 'STATE_READY') {
            window.addEventListener('scroll', this.leftParalaxEffect)

            this.setState({
                listnerId: true,
            })
        }
    }
    componentWillReceiveProps(nextProps) {
      const { projectsList } = this.props
      const { listnerId } = this.state

      if (
          nextProps.projectsList.dataState !== projectsList.dataState
          && nextProps.projectsList.dataState === 'STATE_READY'
          && !listnerId
      ) {
          window.addEventListener('scroll', this.leftParalaxEffect)

          this.setState({
              listnerId: true,
          })
        }
    }
    leftParalaxEffect() {
        this.calculateLeftParams()
    }
    calculateLeftParams() {
        const projList = document.querySelector(".projectsList")
        const projLastREl = document.querySelector(".projectsList .right .item:last-child")
        const projLastRElStyles = projLastREl.currentStyle || window.getComputedStyle(projLastREl)
        const sizeScrProjLeft = 0
        const projListLeftCell = document.querySelector(".projectsList .left")

        const windowScrTop = document.documentElement.scrollTop
            || document.body.scrollTop
        const ratioScrListDone = windowScrTop - this.getOffsetRect(projList).top
        const projLastLeftElH = parseFloat(projLastRElStyles.marginTop) + projLastREl.clientHeight

        const ratioScrList = ratioScrListDone * projLastLeftElH / (projList.clientHeight - window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)

        const leftCellTop = ratioScrListDone < 0
            ? 0
            : ratioScrList > projLastLeftElH
                ? `${projLastLeftElH}px`
                : `${ratioScrList}px`

        parseFloat(projListLeftCell.style.top) != leftCellTop
            ? this.setState({
                  leftCellTop,
              })
            : null
    }
    getOffsetRect(elem) {
        const box = elem.getBoundingClientRect()
        const body = document.body
        const docElem = document.documentElement
        const scrollTop = window.pageYOffset
          || docElem.scrollTop
          || body.scrollTop

        const scrollLeft = window.pageXOffset
          || docElem.scrollLeft
          || body.scrollLeft

        const clientTop = docElem.clientTop
          || body.clientTop
          || 0

        const clientLeft = docElem.clientLeft
          || body.clientLeft
          || 0

        const top = box.top + scrollTop - clientTop
        const left = box.left + scrollLeft - clientLeft

        return { top, left }
    }
    render() {
        const { preview, projectsList, buttonTitle } = this.props
        const btnTitle = !buttonTitle
            ? ALL_PROJECTS_BUTTON_TITLE
            : buttonTitle
        const { leftCellTop } = this.state
        const leftCellStyles = { top: leftCellTop }

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
                        <div
                            className="left col6"
                            style={ leftCellStyles }
                        >
                            {
                                this.renderLeftCol()
                            }
                        </div>
                        <div className="right col6">
                            {
                                this.renderRightCol()
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
        )
    }
}

export default MainProjectsList

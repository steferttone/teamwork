/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
import React, { Component } from 'react'

import smoothscroll from 'smoothscroll'

import ProposalItem from 'components/Blocks/ProposalItem'

const PROPOSE_TITLE = 'Предлагаем'

class ProposalComponent extends Component {
    constructor() {
        super()
        this.state = {
            hoveredItem: false,
        }
    }
    componentDidMount() {
        const { proposalList, onGetProposals } = this.props

        if (proposalList.dataState === 'STATE_NOT_REQUESTED') {
            onGetProposals()
        }
    }
    render() {
        const { hoveredItem } = this.state
        const { proposalList } = this.props

        if (proposalList.dataState !== 'STATE_READY') {
            return null
        }

        return (
            <section className="devProfils">
                <div className="showNext arrAnim">
                    <span
                        className="cap"
                        onClick={
                            () => {
                                const pos = document
                                    .getElementsByClassName('hoverSideContainer')[0]
                                    .getBoundingClientRect()
                                    .top

                                smoothscroll(pos)
                            }
                        }
                    >
                        { PROPOSE_TITLE }
                    </span>
                    <button className="icon-arr-down"></button>
                </div>
                <div className="container hoverSideContainer">
                    <div className="grid hoverSide">
                        {
                            proposalList.data.map(
                                (proposal, key) => {
                                    const smSize = (key+1)%3 === 0
                                        ? 12
                                        : 6

                                    return (
                                        <div
                                            className={ `item col4 col${smSize}-sm col12-xs`}
                                            key={ `${proposal.title}${key}` }
                                        >
                                            <div
                                                className="profSide"
                                                onMouseEnter={
                                                    () => {
                                                        this.setState({
                                                            hoveredItem: key,
                                                        })
                                                    }
                                                }
                                                onMouseLeave={
                                                    () => {
                                                        this.setState({
                                                            hoveredItem: false,
                                                        })
                                                    }
                                                }
                                            ></div>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
                <div className="fadeLogo">
                    <span className="icon-logo-text"></span>
                </div>
                <div className="container">
                    <div className="grid profCont scrollParent">
                        {
                            proposalList.data.map(
                                (item, key) => {
                                    const additionalClass = hoveredItem === key
                                        ? 'hover'
                                        : ''

                                    return ProposalComponent
                                        .renderProposalItem(item, key, additionalClass)
                                }
                            )
                        }
                    </div>
                </div>
            </section>
        )
    }
    static renderProposalItem(item, key, additionalClass) {
        const smSize = (key+1)%3 === 0
            ? 12
            : 6
        return (
            <ProposalItem
                item={ item }
                key={ key }
                additionalClass={ additionalClass }
                smSize={ smSize }
            />
        )
    }
    static renderProposalSubList(title, list) {
        return (
            <div className="table">
                <div className="tCell middle">
                    <h2>{ title}</h2>
                    <ul>
                        {
                            list.map(
                                (data, i) => {
                                    return (
                                        <li key={ i }>
                                            { data }
                                        </li>
                                    )
                                }
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
    static renderItemElements(elements) {
        return elements.map(
            (element, i) => {
                return (
                    <div
                        className={ element.className }
                        key={ i }
                    >
                        {
                            element.innerCount
                            ? ProposalComponent
                                .renderSpans(element.innerCount)
                            : null
                        }
                    </div>
                )
            }
        )
    }
    static renderSpans(count) {
        const arr = []
        for (let i = 0; i < count; i++) {
            arr.push(i)
        }
        return arr.map(
            (el, key) => {
                return (
                    <span key={ key}/>
                )
            }
        )
    }
}

export default ProposalComponent

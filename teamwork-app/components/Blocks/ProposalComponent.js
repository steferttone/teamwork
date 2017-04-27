/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
import React, { Component } from 'react'

import ProposalItem from 'components/Blocks/ProposalItem'

const PROPOSE_TITLE = 'Предлагаем'

class ProposalComponent extends Component {
    componentDidMount() {
        const { proposalList, onGetProposals } = this.props

        if (proposalList.dataState === 'STATE_NOT_REQUESTED') {
            onGetProposals()
        }
    }
    render() {
        const { proposalList } = this.props

        if (proposalList.dataState !== 'STATE_READY') {
            return null
        }

        return (
            <section className="devProfils">
                <div className="showNext arrAnim">
                    <span className="cap">{ PROPOSE_TITLE }</span>
                    <button className="icon-arr-down"></button>
                </div>
                <div className="container hoverSideContainer">
                    <div className="grid hoverSide">
                        {
                            proposalList.data.map(
                                (proposal, key) => {
                                    return (
                                        <div
                                            className="item col4 col6-sm col12-xs"
                                            key={ `${proposal.title}${key}` }
                                        >
                                            <div className="profSide"></div>
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
                                    return ProposalComponent.renderProposalItem(item, key)
                                }
                            )
                        }
                    </div>
                </div>
            </section>
        )
    }
    static renderProposalItem(item, key) {
        return (
            <ProposalItem
                item={ item }
                key={ key }
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

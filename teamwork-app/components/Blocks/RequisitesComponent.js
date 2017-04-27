import React, { Component } from 'react'

const REQUISITES_TITLE = 'Реквизиты'

class RequisitesComponent extends Component {
    constructor() {
        super()
        this.state = {
            shownBlock: false,
        }
    }
    componentDidMount() {
        const { requisites, onGetRequisites } = this.props

        if (requisites.dataState === 'STATE_NOT_REQUESTED') {
            onGetRequisites()
        }
    }
    render() {
        const { requisites } = this.props

        if (requisites.dataState !== 'STATE_READY') {
            return null
        }

        return (
            <section className="values">
                <div className="container">
                    <div className="col8 col12-md col8-xs col12-xss centerBl">
                        <span className="cap gradText">{ REQUISITES_TITLE }</span>
                        <div className="grid">
                            {
                                this.renderRequisitesItems()
                            }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    renderRequisitesItems() {
        const { requisites } = this.props
        const { shownBlock } = this.state
        const style = {}

        if (shownBlock !== false) {
            style.display = 'inherit'
        }

        return requisites.data.map(
            (item, key) => {
                return (
                    <div className="col6 col12-xs" key={ `${key}${item.title}` }>
                        <span
                            className="cap"
                            onClick={
                                () => {
                                    const nextState = shownBlock === key
                                        ? false
                                        : key

                                    this.setState({
                                        shownBlock: nextState,
                                    })
                                }
                            }
                        > { item.title }</span>
                        <ul
                            style={ shownBlock === key ? style : {} }
                        >
                            {
                                item.data.map(
                                    (dataItem, itemKey) => {
                                        return (
                                            <li key={ itemKey }>
                                                <b>{ dataItem.title }</b>
                                                { dataItem.description }
                                            </li>
                                        )
                                    }
                                )
                            }
                        </ul>
                    </div>
                )
            }
        )
    }
}

export default RequisitesComponent

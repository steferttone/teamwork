import React, { Component } from 'react'

class AboutBlock extends Component {
    componentDidMount() {
        const { aboutUsData, onGetAboutUsData } = this.props

        if (aboutUsData.dataState === 'STATE_NOT_REQUESTED') {
            onGetAboutUsData()
        }
    }
    render() {
        const { aboutUsData } = this.props

        if (aboutUsData.dataState !== 'STATE_READY') {
            return null
        }

        return (
            <section className="hideXS aboutBlock">
                <div className="container">
                    <div className="teamCap"><span className="text">TeamWork</span><span className="icon-logo-text"></span></div>
                    <div className="grid">
                        {
                            aboutUsData.data.map(
                                (data, key) => {
                                    return AboutBlock.renderDataBlock(data, key)
                                }
                            )
                        }
                    </div>
                </div>
            </section>
        )
    }
    static renderDataBlock(data, key) {
        if (data.type === 'text') {
            return (
                <div
                    className="item col4 noCap"
                    key={ key }
                >
                    <p>{ data.description }</p>
                </div>
            )
        }
        return (
            <div className="item col4" key={ key }>
                <h2>{ data.title }</h2>
                {
                    data.description.map(
                        (item, itemKey) => {
                            if (item.type === 'html') {
                                return (
                                    <p
                                        key={ itemKey }
                                        dangerouslySetInnerHTML={
                                            { __html: item.data }
                                        }
                                    />
                                )
                            }
                            return (
                                <p key={ itemKey }>
                                    { item.data }
                                </p>
                            )
                        }
                    )
                }
            </div>
        )
    }
}

export default AboutBlock

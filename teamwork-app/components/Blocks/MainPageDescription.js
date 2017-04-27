/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React, { Component } from 'react'

const componentData = {
    title: 'TeamWork',
    description: 'Создание и продвижение сайтов, <br/>графический дизайн',
    actionButton: {
        title: 'О компании',
        link: '#/team',
    },
}

class MainPageDescription extends Component {
    render() {
        return (
            <section className="firstMain">
                <div className="container">
                    <div className="table">
                        <div className="tCell middle">
                            <div className="in">
                                <div className="teamCap">
                                    <h1 className="text">{ componentData.title }</h1>
                                    <span className="icon-logo-text"></span>
                                </div>
                                <span className="textAb"
                                    dangerouslySetInnerHTML={
                                        { __html: componentData.description }
                                    }
                                />
                                <a
                                    href={ componentData.actionButton.link }
                                    className="redBtn icon-arr-right">
                                    { componentData.actionButton.title }
                                </a>
                                <span className="icon-logo logoIcon"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        )
    }
}

export default MainPageDescription

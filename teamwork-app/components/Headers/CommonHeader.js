import React, { Component } from 'react'

import { hashHistory } from 'react-router'

import MessagesWrapper from 'components/Headers/MessageWrapper'

const menuList = [
    {
        link: 'team',
        title: 'TeamWork',
    },
    {
        link: 'portfolio',
        title: 'Портфолио',
    },
    {
        link: 'contacts/ru',
        title: 'Контакты',
    },
]

const langsList = ['RU', 'EN', 'BE']

class CommonHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentLang: 'RU',
            opened: false,
        }
    }
    render() {
        const { currentLang, opened } = this.state
        const { className } = this.props

        const showingState = opened ? 'open' : ''

        return (
            <header className={ className }>
                <MessagesWrapper />
                <div className="container">
                    <a href="#" className="logo invisTextA">
                        лого
                        <span className="icon-logo"></span>
                    </a>
                    <button
                        className={
                            [
                                'menuButt',
                                'showXS',
                                showingState,
                            ].join(' ')
                        }
                        onClick={
                            () => {
                                this.setState({
                                    opened: !opened,
                                })
                            }
                        }
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div
                        className={
                            [
                                'menuBlock',
                                showingState,
                            ].join(' ')
                        }
                    >
                        <div className="table">
                            <ul className="menu">
                                {
                                    menuList.map(
                                        (item, key) => {
                                            return (
                                                <li key={ key }>
                                                    <a
                                                        href="#"
                                                        onClick={ (e)=> {
                                                            e.preventDefault()
                                                            hashHistory.push({
                                                                pathname: `/${item.link}`,
                                                            })
                                                        }}
                                                    >
                                                        { item.title }
                                                    </a>
                                                </li>
                                            )
                                        }
                                    )
                                }
                            </ul>
                            <ul className="langs hidden">
                                {
                                    langsList.map(
                                        (lang, key) => {
                                            const active = currentLang === lang
                                                ? 'active'
                                                : ''
                                            return (
                                                <li key={ key }>
                                                    <a
                                                        href="#"
                                                        className={ active }
                                                        onClick={
                                                            (e) => {
                                                                e.preventDefault()
                                                                this.setState({
                                                                    currentLang: lang,
                                                                })
                                                            }
                                                        }
                                                    >
                                                        { lang }
                                                    </a>
                                                </li>
                                            )
                                        }
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default CommonHeader

export {
    menuList,
    langsList,
}

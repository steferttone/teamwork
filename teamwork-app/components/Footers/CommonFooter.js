/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React, { Component } from 'react'

import { hashHistory } from 'react-router'
import { menuList } from 'components/Headers/CommonHeader'

const COPYRIGHT = '© Copyright TeamWork'

class CommonFooter extends Component {
    render() {
        return (
            <footer>
                    <a href="#" className="logo logoFoot invisTextA">
                        лого
                        <span className="icon-logo"></span>
                    </a>
                    <ul className="menu hideXS">
                        {
                            menuList.map(
                                (item, key) => {
                                    return (
                                        <li key={ key }>
                                            <a
                                                href={ `#${item.link}` }
                                                onClick={ (e)=> {
                                                    e.preventDefault()
                                                    hashHistory.push({
                                                        pathname: `${item.link}`,
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
                    <p className="copyRight">{ COPYRIGHT }</p>
                </footer>
        )
    }
}

export default CommonFooter

import React, { Component } from 'react'
import { menuList } from 'components/Headers/CommonHeader'

import debug from 'helpers/debugLogger'

const COPYRIGHT = '© Copyright TeamWork'

class CommonFooter extends Component {
    render() {
        debug.log(this.props)
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
                                            <a href={ item.link }>
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

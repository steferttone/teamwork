import React, { Component } from 'react'

import { Link } from 'react-router'

class LeftIconBlock extends Component {
    
    render() {
        const { keyIndex, data, isLink, radiusStyle, isWhiteIcon  } = this.props

        const TITLE_CLASSES = "singleLink leftIconTxt"

        const style = radiusStyle == true
        ? 'iconRadius'
        : ''
        const styleIcon = isWhiteIcon == true
        ? 'iconBgWhite'
        : ''
        const key = keyIndex !== 'undefined'
        ? keyIndex
        : ''
        const isLinkClassName = isLink
        ? ''
        : ' noLink'
        


        return (            
            <div key={ key } className={ `leftIconBlock ${ isLinkClassName }` }>
                <span className={ `iconFont ${ data.icon } ${ style } ${ styleIcon }` }></span>
                { 
                    isLink
                    ? 
                        <Link 
                            to={`${ data.link+data.id }`}
                            className={ TITLE_CLASSES }
                        >
                            { data.title }
                        </Link>
                    : 
                        <span className={`${ TITLE_CLASSES + isLinkClassName }`}>{ data.title }</span>
                }
            </div> 
        )
    }
}

export default LeftIconBlock

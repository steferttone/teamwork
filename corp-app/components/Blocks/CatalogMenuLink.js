import React, { Component } from 'react'

import { Link } from 'react-router'

class CatalogMenuLink extends Component {
    
    render() {
        const { keyIndex, data, radiusStyle, activeItem  } = this.props

        const TITLE_CLASSES = "singleLink leftIconTxt"
        
        const isActive = activeItem !== "undefined"
        ? parseInt(activeItem) === parseInt(data.id)
            ? "active"
            : ""
        : ""

        const style = radiusStyle == true
        ? 'iconRadius'
        : isActive === "active"
            ? 'iconRadius'
            : ""
            
        const key = keyIndex != 'undefined'
        ? keyIndex
        : ''

        return (            
            <div key={ key } className={ `leftIconBlock ${ isActive }` }>
                <span className={ `iconFont ${ data.icon } ${ style }` }></span>
                { 
                    <Link 
                        to={`${ data.link+`cat-`+data.id }`}
                        className={ TITLE_CLASSES }
                    >
                        { data.title }
                    </Link>
                }
            </div> 
        )
    }
}

export default CatalogMenuLink

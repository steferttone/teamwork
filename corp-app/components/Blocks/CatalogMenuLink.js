import React, { Component } from 'react'

import { Link } from 'react-router'

class CatalogMenuLink extends Component {
    
    render() {
        // console.log("CatalogMenuLink get data")
        const { data, radiusStyle, activeItem  } = this.props

        // console.log("CatalogMenuLink get data done")
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
            
        return (            
            <div className={ `leftIconBlock ${ isActive }` }>
                <span className={ `iconFont ${ data.icon } ${ style }` }></span>
                { 
                    <Link 
                        to={`${ data.link+`cat-`+data.id }`}
                        className={ TITLE_CLASSES }
                        dangerouslySetInnerHTML={ {__html: data.title } }
                    />
                }
            </div> 
        )
    }
}

export default CatalogMenuLink

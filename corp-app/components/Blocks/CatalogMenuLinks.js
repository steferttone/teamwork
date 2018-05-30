import React, { Component } from 'react'

import { Link } from 'react-router'
import CatalogMenuLink from 'components/Blocks/CatalogMenuLink'

class CatalogMenuLinks extends Component {
    
    render() {
        const { itemKey, listItems, itemStyle, activeItem } = this.props
        const viewType = itemStyle.type == 'vert'
        ? 'vertical'
        : type == 'hor' 
            ? 'horizontal'
            : ''
        const radiusStyle = itemStyle.isRadius == true
        ? true
        : false
        const key = itemKey != 'undefined'
        ? itemKey
        : ''
        const TITLE_CLASSES = "singleLink leftIconTxt"
        

        return (            
            <div className={ `leftlisticonblock ${ viewType }`} key={ key }>
                {
                    listItems.map(
                        (item, index) => {
                            return (
                                <CatalogMenuLink 
                                    key={ index }
                                    data={ item }
                                    radiusStyle={ radiusStyle }
                                    activeItem={ activeItem }
                                />
                            )
                        }
                    )
                }        
            </div>
        )
    }
}

export default CatalogMenuLinks

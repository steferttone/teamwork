import React, { Component } from 'react'

import CatalogMenuLink from 'components/Blocks/CatalogMenuLink'

class CatalogMenuLinks extends Component {
    
    render() {
        const { listItems, itemStyle, activeItem } = this.props
        const viewType = itemStyle.type == 'vert'
        ? 'vertical'
        : type == 'hor' 
            ? 'horizontal'
            : ''
        const radiusStyle = itemStyle.isRadius == true
        ? true
        : false   

        return (            
            <div className={ `leftlisticonblock ${ viewType }`}>
                {
                    listItems.map(
                        (item, key) => {
                            return (
                                <CatalogMenuLink 
                                    key={ key }
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

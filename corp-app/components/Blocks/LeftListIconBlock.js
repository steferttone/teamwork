import React, { Component } from 'react'

import { Link } from 'react-router'
import LeftIconBlock from 'components/Blocks/LeftIconBlock'

class LeftListIconBlock extends Component {
    
    render() {
        const { itemKey, listItems, type, isLink, isRadius, isWhiteIcon, activeItem } = this.props
        const viewType = type == 'vert'
        ? 'vertical'
        : type == 'hor' 
            ? 'horizontal'
            : ''
        const radiusStyle = isRadius == true
        ? true
        : false
        const link = isLink == true
        ? true
        : false
        const iconColor = isWhiteIcon == true
        ? true
        : false
        const key = itemKey != 'undefined'
        ? itemKey
        : ''
        const activeId = activeItem != 'undefined'
        ? activeItem
        : ''
        const TITLE_CLASSES = "singleLink leftIconTxt"
        
        return (            
            <div className={ `leftlisticonblock ${ viewType }`} key={ key }>
                {
                    listItems.map(
                        (item, index) => {
                            return (
                                <LeftIconBlock 
                                    key={ index }
                                    data={ item }
                                    isLink={ link }
                                    activeLink={ activeId }
                                    radiusStyle={ radiusStyle }
                                    isWhiteIcon={ iconColor }
                                />
                            )
                        }
                    )
                }        
            </div>
        )
    }
}

export default LeftListIconBlock

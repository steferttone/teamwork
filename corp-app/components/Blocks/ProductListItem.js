import React, { Component } from 'react'

import { Link } from 'react-router'
import MediaBlock from 'components/Blocks/MediaBlock'

class ProductListItem extends Component {
    
    render() {
        const {  data } = this.props  
        
        const prodImages = Array.isArray(data.image)
        ? data.image
        : new Array(data.image)

        return (    
            <div className="product-item invisLink">
                <Link to={ `/catalog/cat-`+data.idCatalog+data.link+`prod-`+data.id } >{ data.linkTitle }</Link>
                <MediaBlock
                    mediaLink = { prodImages[0] }
                />
                <div className="textBlock">
                    <span className="singlelink">{ data.title }</span>
                    <span className="size"><b>Размер:</b> { data.sizeX+`x`+data.sizeY+data.sizeType } ({ data.count } шт)</span>
                    <p>{ data.description }</p>
                </div>
            </div>
        )
    }
}

export default ProductListItem

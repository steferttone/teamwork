import React, { Component } from 'react'

import { Link } from 'react-router'

class ProductListItem extends Component {
    
    render() {
        const { itemKey, data } = this.props
        const key = itemKey != 'undefined'
        ? itemKey
        : ''

        return (    
            <div key={ key } className="product-item invisLink">
                <Link to={ `/catalog/cat-`+data.idCatalog+data.link+`prod-`+data.id }>{ data.linkTitle }</Link>
                <div className="mediaBlock" style={{ backgroundImage: `url(${ data.image })`}}></div>
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

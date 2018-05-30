import React, { Component } from 'react'

import { Link } from 'react-router'
import ProductListItem from 'components/Blocks/ProductListItem'

const NULL_RESULT = "В данной катекогории товаров не найдено..."

class CatalogProducts extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            catalogProducts: {}
        }
    }
    componentWillMount() {
        const { params, onGetCatalogProducts } = this.props
        onGetCatalogProducts()
    }
    componentWillReceiveProps(nextProps) {
        const { dataState, data } = nextProps.catalogProducts
        const { catId } = this.props.params
        const { onGetCatalogProducts } = this.props

        const dataRes = catId !== undefined 
        ? data.filter(item => `cat-`+item.idCatalog === catId)
        : data.length > 9
            ? data.slice(data.length - 9, data.length)
            : data

        if (catId !== nextProps.params.catId){
            onGetCatalogProducts()
            return
        }
        
        if (dataState === 'STATE_READY') {
            this.setState(
                {
                    catalogProducts: dataRes
                }
            )
        }
    }
    
    render() {
        const { dataState } = this.props.catalogProducts
        if (dataState !== 'STATE_READY') {
            return null
        }
        const { catalogProducts } = this.state

        if (catalogProducts.length > 0){  
            return (                     
                <div className="product-list catalog-product-list">
                    {
                        catalogProducts.map(
                            (item, key) => {
                                return (
                                    <ProductListItem
                                        data={ item }
                                        key={ key }
                                    />
                                )
                            }
                        )
                    }
                </div>  
            )
        }else{
            return(
                <p>{ NULL_RESULT }</p>
            )
        }
    }
}

export default CatalogProducts

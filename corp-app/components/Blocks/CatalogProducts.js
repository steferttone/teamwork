import React, { Component } from 'react'

import Pagination from "components/Blocks/PaginationBlock";
import ProductListItem from 'components/Blocks/ProductListItem'

const NULL_RESULT = "В данной катекогории товаров не найдено..."
const PAGE_ITEMS_LIMIT = 9

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
        : data  

        if (catId !== nextProps.params.catId){
            onGetCatalogProducts()
            return
        }
        
        if (dataState === 'STATE_READY') {
            this.setState(
                {
                    catalogProducts: dataRes,
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

        const totalCount = catalogProducts.length
        
        if (totalCount > 0){ 
            const activePage = this.state.activePage !== undefined 
                ? this.state.activePage : 
                1
            const itemsEnd = Math.ceil(activePage * PAGE_ITEMS_LIMIT)
            const itemsStart = itemsEnd - PAGE_ITEMS_LIMIT
            const viewProducts = totalCount > PAGE_ITEMS_LIMIT
                ? catalogProducts.slice(itemsStart, itemsEnd)
                : catalogProducts

            const pagination = totalCount > PAGE_ITEMS_LIMIT
                ? <Pagination 
                    itemsCountPerPage={ PAGE_ITEMS_LIMIT }
                    totalItemsCount={ totalCount }
                    context={ this }
                    />
                : ''        
 
            return (                     
                <div className="catalog-products-block">
                    <div className="product-list catalog-product-list">
                        {
                            viewProducts.map(
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
                    { pagination }
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

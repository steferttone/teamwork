import React, { Component } from 'react'

import Pagination from "components/Blocks/PaginationBlock";
import CorpProductListItem from 'components/Blocks/CorpProductListItem'

const NULL_RESULT = "В данной катекогории товаров не найдено..."
const PAGE_ITEMS_LIMIT = 3

class CorpProducts extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            corpProducts: {}
        }
    }
    componentWillMount() {
        const { params, onGetCorpProducts } = this.props
        onGetCorpProducts()
    }
    componentWillReceiveProps(nextProps) {
        const { dataState, data } = nextProps.corpProducts
        const { catId } = this.props.params
        const { onGetCorpProducts } = this.props

        const dataRes = catId !== undefined 
        ? data.filter(item => `cat-`+item.idCorp === catId)   
        : data  

        if (catId !== nextProps.params.catId){
            onGetCorpProducts()
            return
        }
        
        if (dataState === 'STATE_READY') {
            this.setState(
                {
                    corpProducts: dataRes,
                }
            )
        }
    }
    
    render() {
        const { dataState } = this.props.corpProducts
        if (dataState !== 'STATE_READY') {
            return null
        }
        const { corpProducts } = this.state

        const totalCount = corpProducts.length
        
        if (totalCount > 0){ 
            const activePage = this.state.activePage !== undefined 
                ? this.state.activePage : 
                1
            const itemsEnd = Math.ceil(activePage * PAGE_ITEMS_LIMIT)
            const itemsStart = itemsEnd - PAGE_ITEMS_LIMIT
            const viewProducts = totalCount > PAGE_ITEMS_LIMIT
                ? corpProducts.slice(itemsStart, itemsEnd)
                : corpProducts

            const pagination = totalCount > PAGE_ITEMS_LIMIT
                ? <Pagination 
                    itemsCountPerPage={ PAGE_ITEMS_LIMIT }
                    totalItemsCount={ totalCount }
                    context={ this }
                    />
                : ''        
 
            return (                     
                <div className="page-corparate">
                    <div className="buyBlockList">
                        {
                            viewProducts.map(
                                (item, key) => {
                                    return (
                                        <CorpProductListItem
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
                <div className="page-corparate">
                    <div className="buyBlockList">
                        <div className="buyBlockline null">
                            <p>{ NULL_RESULT }</p>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default CorpProducts

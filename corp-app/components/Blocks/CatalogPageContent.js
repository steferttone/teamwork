import React, { Component } from 'react'

import CatalogMenuLinks from "components/Blocks/CatalogMenuLinks"

import ProductsList from "components/Blocks/ProductsList"
import ProductItem from "containers/ProductConnect"

class CatalogPageContent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            catalogMenuList: [],
            activeItem: '',
        }
    }
    componentWillMount() {
        const { onGetCatalogMenuList } = this.props
        onGetCatalogMenuList()
    }
    componentWillReceiveProps(nextProps) {
        const { dataState, data } = nextProps.catalogMenuList
        const { params } = this.props
        const { catId } = params

        var activeItem = {}
        data.filter(
            (item) => {
                item.data.filter(
                    (inItem) => {
                        if (`cat-`+inItem.id === catId)
                            activeItem = inItem
                    }
                )
            }
        )
        if (dataState === 'STATE_READY') {
            this.setState(
                {
                    catalogMenuList: data,
                    activeItem: activeItem
                }
            )
        }
    }

    render() {
        const { dataState } = this.props.catalogMenuList
        if (dataState !== 'STATE_READY') {
            return null
        }
        const { catalogMenuList } = this.state
        const { activeItem } = this.state
        const { params } = this.props
        const { prodId } = params
        
        const rightSide = prodId === undefined
        ? <ProductsList params={ params } activeItem={ activeItem }/>
        : <ProductItem params={ params } activeItem={ activeItem } catalogMenuList={ catalogMenuList } />

        return (   
            <div className="page cfix">
                <div className="page-left">  
                    <div className="catalogBlock vertical">
                        {
                            catalogMenuList.map(
                                (item, key) => {
                                    return (
                                        <div key={ key } className="item">
                                            <span className="catalogBlock-title">{ item.title }</span>
                                            <CatalogMenuLinks 
                                                itemKey={ key } 
                                                listItems={ item.data } 
                                                itemStyle={ {
                                                    type: "vert",
                                                    isRadius: false
                                                } }
                                                activeItem={ activeItem.id }
                                            />
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
                { rightSide }
            </div>
        )
    }
}

export default CatalogPageContent
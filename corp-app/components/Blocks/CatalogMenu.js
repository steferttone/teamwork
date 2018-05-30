import React, { Component } from 'react'

import { Link } from 'react-router'
import CatalogMenuLinks from "components/Blocks/CatalogMenuLinks"


class CatalogMenu extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            catalogMenuList: []
        }
    }
    componentWillMount() {
        const { onGetCatalogMenuList } = this.props
        onGetCatalogMenuList()
    }
    componentWillReceiveProps(nextProps) {
        const { dataState, data } = nextProps.catalogMenuList

        if (dataState === 'STATE_READY') {
            this.setState(
                {
                    catalogMenuList: data
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
        const { activeItem, itemStyle, type } = this.props

        const style = type == "vert"
        ? "vertical"
        : type == "hor"
            ? "horizontal"
            : ""

        return (   
            <div className={ `catalogBlock ${ style }` }>
                {
                    catalogMenuList.map(
                        (item, key) => {
                            return (
                                <div key={ key } className="item">
                                    <span className="catalogBlock-title">{ item.title }</span>
                                    <CatalogMenuLinks 
                                        itemKey={ key } 
                                        listItems={ item.data } 
                                        itemStyle={ itemStyle } 
                                        activeItem={ activeItem }
                                    />
                                </div>
                            )
                        }
                    )
                }
            </div>
        )
    }
}

export default CatalogMenu
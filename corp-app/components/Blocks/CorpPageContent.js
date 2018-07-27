import React, { Component } from 'react'

import { Link } from 'react-router'
import CatalogMenuLinks from "components/Blocks/CatalogMenuLinks"
import CorpProductsList from "components/Blocks/CorpProductsList"

const TO_HOME_PAGE = "Главная"
const PAGE_TITLE = "Корпоративным заказчикам"

class CorpPageContent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            corpMenuList: [],
            activeItem: '',
        }
    }
    componentWillMount() {
        const { onGetCorpMenuList } = this.props
        onGetCorpMenuList()
    }
    componentWillReceiveProps(nextProps) {
        const { dataState, data } = nextProps.corpMenuList
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
                    corpMenuList: data,
                    activeItem: activeItem
                }
            )
        }
    }

    render() {
        const { dataState } = this.props.corpMenuList
        if (dataState !== 'STATE_READY') {
            return null
        }
        const { corpMenuList } = this.state
        const { activeItem } = this.state
        const { params } = this.props
    
        return (   
            <div className="page-corparateWrap">
                <div className="page-title">
                    <ul className="breadCrumbs">
                        <li className="breadCrumbs-item">
                            <Link
                                to="/" 
                                className="singleLink"
                            >
                                { TO_HOME_PAGE }
                            </Link>
                        </li>
                        <li className="breadCrumbs-item">
                            <span className="txt">{ PAGE_TITLE }</span>
                        </li>
                    </ul>
                    <h2 className="capTwo">{ PAGE_TITLE }</h2>
                </div>
                <div className="page cfix">
                    <div className="page-left">  
                        <div className="catalogBlock vertical">
                            {
                                corpMenuList.map(
                                    (item, key) => {
                                        return (
                                            <div key={ key } className="item">
                                                <span className="catalogBlock-title">{ item.title }</span>
                                                <CatalogMenuLinks 
                                                    key={ key } 
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
                    <CorpProductsList 
                        params={ params } 
                        activeItem={ activeItem }  
                    />
                </div>
            </div>
        )
    }
}

export default CorpPageContent
import React, { Component } from 'react'

import Pagination from "components/Blocks/PaginationBlock";
import QuestRequestList from 'components/Blocks/QuestRequestList'

const PAGE_ITEMS_LIMIT = 5

class ForDillersList extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            forDillersList: []
        }
    }
    componentWillMount() {
        const { onGetForDillersList } = this.props
        onGetForDillersList()
    }
    componentWillReceiveProps(nextProps) {
        const { dataState, data } = nextProps.forDillersList
        if (dataState === 'STATE_READY') {
            this.setState(
                {
                    forDillersList: data
                }
            )
        }
    }
    
    render() {
        const { dataState } = this.props.forDillersList
        if (dataState !== 'STATE_READY') {
            return null
        }
        const { lastCount } = this.props
        const forDillersListFull = this.state.forDillersList

        const totalCount = forDillersListFull.length
        const activePage = this.state.activePage !== undefined 
            ? this.state.activePage : 
            1
        const itemsEnd = Math.ceil(activePage * PAGE_ITEMS_LIMIT)
        const itemsStart = itemsEnd - PAGE_ITEMS_LIMIT

        const forDillersList = lastCount !== undefined
        ? forDillersListFull.slice(totalCount - parseInt(lastCount), totalCount)
        : forDillersListFull.slice(itemsStart, itemsEnd)      

        const pagination = lastCount === undefined && totalCount > PAGE_ITEMS_LIMIT
            ? <Pagination 
                itemsCountPerPage={ PAGE_ITEMS_LIMIT }
                totalItemsCount={ totalCount }
                context={ this }
                />
            : ''

        return (   
            <div className="forDillersList">
                <QuestRequestList 
                    data={ forDillersList }
                />
                { pagination }
            </div>
        )
    }
}

export default ForDillersList

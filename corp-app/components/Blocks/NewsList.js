import React, { Component } from 'react'

import Pagination from "components/Blocks/PaginationBlock";
import ArticlesList from 'components/Blocks/ArticlesList'

const PAGE_ITEMS_LIMIT = 4

class NewsList extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            newsList: []
        }
    }
    componentWillMount() {
        const { onGetNewsList } = this.props
        onGetNewsList()
    }
    componentWillReceiveProps(nextProps) {
        const { dataState, data } = nextProps.newsList
        if (dataState === 'STATE_READY') {
            this.setState(
                {
                    newsList: data
                }
            )
        }
    }

    render() {
        const { dataState } = this.props.newsList
        if (dataState !== 'STATE_READY') {
            return null
        }
        const { lastCount } = this.props
        const newsListFull = this.state.newsList

        const totalCount = newsListFull.length
        const activePage = this.state.activePage !== undefined 
            ? this.state.activePage : 
            1
        const itemsEnd = Math.ceil(activePage * PAGE_ITEMS_LIMIT)
        const itemsStart = itemsEnd - PAGE_ITEMS_LIMIT

        const newsList = lastCount !== undefined
        ? newsListFull.slice(totalCount - parseInt(lastCount), totalCount)
        : newsListFull.slice(itemsStart, itemsEnd)      

        const pagination = lastCount === undefined && totalCount > PAGE_ITEMS_LIMIT
            ? <Pagination 
                itemsCountPerPage={ PAGE_ITEMS_LIMIT }
                totalItemsCount={ totalCount }
                context={ this }
                />
            : ''

        return ( 
            <div className="articleListLineBlock">  
                <ArticlesList
                    data={ newsList }
                />
                { pagination }
            </div>
        )
    }
}

export default NewsList
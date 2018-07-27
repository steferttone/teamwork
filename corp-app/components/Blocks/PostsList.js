import React, { Component } from 'react'

import Pagination from "components/Blocks/PaginationBlock";
import ArticlesList from 'components/Blocks/ArticlesList'

const PAGE_ITEMS_LIMIT = 4

class PostsList extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            postsList: []
        }
    }
    componentWillMount() {
        const { onGetPostsList } = this.props
        onGetPostsList()
    }
    componentWillReceiveProps(nextProps) {
        const { dataState, data } = nextProps.postsList
        if (dataState === 'STATE_READY') {
            this.setState(
                {
                    postsList: data
                }
            )
        }
    }

    render() {
        const { dataState } = this.props.postsList
        if (dataState !== 'STATE_READY') {
            return null
        }
        const { lastCount } = this.props
        const postsListFull = this.state.postsList
        
        const totalCount = postsListFull.length
        const activePage = this.state.activePage !== undefined 
            ? this.state.activePage : 
            1
        const itemsEnd = Math.ceil(activePage * PAGE_ITEMS_LIMIT)
        const itemsStart = itemsEnd - PAGE_ITEMS_LIMIT


        const postsList = lastCount !== undefined
        ? postsListFull.slice(totalCount - parseInt(lastCount), totalCount)
        : postsListFull.slice(itemsStart, itemsEnd)   

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
                    data={ postsList }
                />
                { pagination }
            </div> 
        )
    }
}

export default PostsList
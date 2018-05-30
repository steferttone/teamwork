import React, { Component } from 'react'

import { Link } from 'react-router'

import ArticlesList from 'components/Blocks/ArticlesList'

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
        const newsList = lastCount !== undefined
        ? newsListFull.slice(newsListFull.length - parseInt(lastCount), newsListFull.length)
        : newsListFull        
        
        return (   
            <ArticlesList
                data={ newsList }
            />
        )
    }
}

export default NewsList
import React, { Component } from 'react'

import { Link } from 'react-router'

import ArticlesList from 'components/Blocks/ArticlesList'

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
        const postsList = lastCount !== undefined
        ? postsListFull.slice(postsListFull.length - parseInt(lastCount), postsListFull.length)
        : postsListFull        
        
        return (   
            <ArticlesList
                data={ postsList }
            />
        )
    }
}

export default PostsList
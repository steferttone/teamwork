import React, { Component } from 'react'

import MediaBlock from 'components/Blocks/MediaBlock'

class ArticleLineBlock extends Component {
    
    render() {
        const { data, keyIndex } = this.props
        const key = keyIndex !== 'undefined'
        ? keyIndex
        : ""
        
        return (            
            <div className="wrapp">
                <MediaBlock
                    mediaLink = { data.image }
                />
                <div className="textBlock">
                    <div className="articleLineTitle">
                        <span className="dateData">{ data.date }</span>
                        <a href={ `${ data.link+data.id }` } className="singleLink capTwo">{ data.title }</a>                    
                    </div>
                    <p>{ data.content }</p>
                </div>
            </div> 
        )
    }
}

export default ArticleLineBlock

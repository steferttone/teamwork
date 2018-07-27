import React, { Component } from 'react'

import RateArticleBlock from 'components/Blocks/RateArticleBlock'
import MediaBlock from 'components/Blocks/MediaBlock'

class ArticlesList extends Component {
    render() {
        const { data } = this.props

        return (   
            <div className="articlesList">
                {
                    data.map(
                        (item, key) => {
                            return (                                    
                                <div key={ key } className="articleLineBLock">
                                    <MediaBlock
                                        mediaLink = { item.image }
                                    />
                                    <div className="textBlock">
                                        <div className="articleLineTitle">
                                            <span className="dateData">{ item.date }</span>
                                            <span className="singleLink noLink capTwo">{ item.title }</span>                    
                                        </div>
                                        <RateArticleBlock data={ item } />
                                        <p>{ item.content }</p>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        )
    }
}

export default ArticlesList
import React, { Component } from 'react'

import RateArticleBlock from 'components/Blocks/RateArticleBlock'

class ArticlesList extends Component {
    render() {
        const { data } = this.props

        return (   
            <div className="articleListLineBlock">
                {
                    data.map(
                        (item, key) => {
                            return (                                    
                                <div key={ key } className="articleLineBLock">
                                    <div className="mediaBlock" style={{ backgroundImage: `url( ${ item.image })` }}></div>
                                    <div className="textBlock">
                                        <div className="articleLineTitle">
                                            <span className="dateData">{ item.date }</span>
                                            <span className="singleLink capTwo">{ item.title }</span>                    
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
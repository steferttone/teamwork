import React, { Component } from 'react'

import { Link } from 'react-router'
import MediaListGallery from 'components/Blocks/MediaListGallery'

class CorpProductListItem extends Component {
    
    render() {
        const { data } = this.props  
        
        const prodImages = Array.isArray(data.images)
        ? data.images
        : new Array(data.images)

        return (                    
            <div className="buyBlockline">
                <div className="tit">
                    <h2 className="capThree">{ data.title }</h2>
                    <span className="dateData">{ data.date }</span>
                </div>
                <div className="textBlock">        
                    <p>{ data.description }</p>
                </div>
                <MediaListGallery 
                    data={ prodImages }
                />
            </div> 
        )
    }
}

export default CorpProductListItem

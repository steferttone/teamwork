import React, { Component } from 'react'

import MediaListGallery from 'components/Blocks/MediaListGallery'
import MediaBlock from 'components/Blocks/MediaBlock'

class ProductMedia extends Component {
    
    // constructor(props) {
    //     super(props)
        
    //     this.state = {
    //         activeImage: 0
    //     }
    // }
    // componentWillReceiveProps(nextProps) {
    //     const activeImage = nextProps.activeImage

    //     this.setState(
    //         {
    //             activeImage: activeImage
    //         }
    //     )
    // }
    render() {
        const { data } = this.props
        const projectGallery = data.length > 1
        ? <MediaListGallery 
            data={ data }
        />
        : ""
        // const activeImage = this.state.activeImage
        const activeImage = 0

        return (    
            <div className="product-left">   
                <div className="media-full">
                    <MediaBlock
                        mediaLink = { data[activeImage] }
                    />
                </div>                
                { projectGallery }
            </div>
        )
    }
}

export default ProductMedia

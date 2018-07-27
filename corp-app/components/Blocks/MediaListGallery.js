import React, { Component } from 'react'

import MediaBlock from 'components/Blocks/MediaBlock'

class MediaListGallery extends Component {
    render() {
        const { data } = this.props


        return (    
            <div className="mediaListGallery">
                {
                    data.map(
                        (item, key) => {
                            return (
                                <MediaBlock
                                    key = { key }
                                    mediaLink = { item }
                                />
                            )
                        }
                    )
                }
            </div>
        )
    }
}

export default MediaListGallery

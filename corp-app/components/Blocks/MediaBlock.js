import React, { Component } from 'react'

class MediaBlock extends Component {
    render() {
        const { mediaLink } = this.props
        
        return (   
            <div className="mediaBlock" style={{ backgroundImage: `url( ${ mediaLink })` }}></div>
        )
    }
}

export default MediaBlock

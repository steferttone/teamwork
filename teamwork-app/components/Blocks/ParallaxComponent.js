
import React, { Component } from 'react'

class ParallaxComponent extends Component {
    render() {

        return (
            <div className="parallaxComponent">
                {
                    React.Children.only(this.props.children)
                }
                <div className="backParalax">
                </div>
            </div>
        )
    }
}

export default ParallaxComponent

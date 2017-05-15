import React, { Component } from 'react'

import VisibilitySensor from 'react-visibility-sensor'

import { INITIAL_CLASS, SHOW_ANIMATION_CLASS } from 'components/Blocks/ProjectsItem'

class ProjectLinkBlock extends Component {
    constructor() {
        super()
        this.state = {
            animateState: INITIAL_CLASS,
        }
    }
    render() {
        const { item } = this.props
        const { animateState } = this.state

        if (!item) {
            return null
        }

        return (
            <VisibilitySensor
                onChange={ this.onVisibilityChange.bind(this) }
                intervalDelay={ 500 }
                partialVisibility={ 'top' }
                minTopValue={ 250 }
                resizeCheck={ true }
                delayedCall={ true }
            >
                <div className={ `item scrollItem col12-xss ${animateState}` }>
                    <div className="in invisLink invisImg">
                        <div className="image">
                            <div
                                className="img"
                                style={
                                    { backgroundImage: `url(${item.url})` }
                                }
                            />
                            <img src={ item.url } alt=""/>
                        </div>
                        {/* <a href="#">{ item.title }</a> */}
                    </div>
                </div>
            </VisibilitySensor>
        )
    }
    onVisibilityChange(isVisible) {
        const { animateState } = this.state

        if (!isVisible) {
            return
        }
        if (animateState === INITIAL_CLASS) {
            this.setState({
                animateState: SHOW_ANIMATION_CLASS,
            }, this.setState(
                {
                    animateState: '',
                }
            ))
        }
        return
    }
}

export default ProjectLinkBlock

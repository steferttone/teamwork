import React, { Component } from 'react'

import ProposalComponent from 'components/Blocks/ProposalComponent'
import VisibilitySensor from 'react-visibility-sensor'

import { INITIAL_CLASS, SHOW_ANIMATION_CLASS } from 'components/Blocks/ProjectsItem'

class ProposalItem extends Component {
    constructor() {
        super()
        this.state = {
            animateState: INITIAL_CLASS,
        }
    }
    render() {
        const { item, additionalClass, smSize } = this.props
        const { animateState } = this.state

        if (!item) {
            return null
        }

        const className = [
            'prof',
            'scrollItem',
            item.className,
            additionalClass,
        ].join(' ')

        return (
            <VisibilitySensor
                onChange={ this.onVisibilityChange.bind(this) }
                intervalDelay={ 500 }
                partialVisibility={ 'bottom' }
                delayedCall={ true }
            >
                <div className={ `item col4 col${smSize}-sm col12-xs ${animateState}` }>
                    <div className={ className}>
                        {
                            ProposalComponent
                                .renderProposalSubList(item.title, item.dataList)
                        }
                        <div className="els">
                            {
                                ProposalComponent
                                    .renderItemElements(
                                        item.elements
                                    )
                            }
                        </div>
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

export default ProposalItem

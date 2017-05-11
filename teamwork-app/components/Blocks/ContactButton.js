import React, { Component } from 'react'
import ContactsModal from 'components/Blocks/ContactsModal'

const CONTACT_US_BUTTON = 'Связаться с нами'

class ContactButton extends Component {
    constructor() {
        super()
        this.state = {
            showModal: false,
        }
    }
    render() {
        const { showModal } = this.state
        const { buttonTitle, showArrow } = this.props

        document.body.className = showModal ? 'showingModal' : ''

        const btnTitle = !buttonTitle
            ? CONTACT_US_BUTTON
            : buttonTitle

        const additionalClass = showArrow
            ? 'icon-arr-right'
            : ''

        return (
            <button
                className={ hGradBtn `${additionalClass}`}
                onClick={
                    () => {
                        this.setState({
                            showModal: !showModal,
                        })
                    }
                }
            >
                { btnTitle }
                <ContactsModal
                    showingState={ showModal }
                    onShowModal={
                        this.setState.bind(this, {
                            showModal: !showModal,
                        })
                    }
                />
            </button>
        )
    }
}

export default ContactButton

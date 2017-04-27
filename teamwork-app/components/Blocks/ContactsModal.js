import React, { Component } from 'react'

import { connect } from 'react-redux'
import { submitFormData } from 'actions/contactsActions'

import ContactUsForm from 'components/Blocks/ContactUsForm'

import debug from 'helpers/debugLogger'

class ContactsModal extends Component {
    render() {
        const { onShowModal } = this.props

        return (
            <div className="modalsScroll open">
                <div className="modals table">
                    <div className="tCell middle">
                        <div id="makeOrder" className="blockMod Call">
                            <span
                                className="close"
                                onClick={
                                    () => {
                                        onShowModal()
                                    }
                                }
                            >
                                <span/>
                                <span/>
                            </span>
                            <div className="in">
                                <span className="cap gradText">Сделать заказ</span>
                                <ContactUsForm onSubmit={ this.onFormSubmit.bind(this) }/>
                            </div>
                        </div>
                        <div
                            id="overlay"
                            onClick={
                                () => {
                                    onShowModal()
                                }
                            }
                        />
                    </div>
                </div>
            </div>
        )
    }
    onFormSubmit(values) {
        const { onSubmitFormData } = this.props
        debug.log('>>>>', values, this)
        onSubmitFormData(values)
    }
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitFormData: (values) => {
            dispatch(
                submitFormData(values)
            )
        },
    }
}

const ContactsModalConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactsModal)

export default ContactsModalConnect

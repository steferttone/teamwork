/**
 * COPYRIGHT:       Copyright © 2016 Xplorie LLC
 * Warning:         This product is protected by United States and international copyright laws.
 *                  Unauthorized use or duplication of this software, in whole
 *                  or in part, is prohibited.
 */

// Import React
import React, { Component } from 'react'
// import { Link } from 'react-router'

// Importing Redux Form
import {
    reduxForm,
} from 'redux-form'

// Import validators
import {
    validateField,
    validateFirstName,
    validatePhone,
    validateEmail,
    validateSubject,
    // isExternalLink,
} from 'helpers/validators'

import {
    COMPONENT_INPUT,
    COMPONENT_SELECT,
    COMPONENT_TEXTAREA,
    InputHelperComponent,
} from 'helpers/formControlsUtils'

import { connect } from 'react-redux'

// Importing form components
import {
    FormGroup,
    Button,
} from 'react-bootstrap/lib'

// Importing actions
import { submitFormData } from 'actions/contactsActions'

const THANKS_TITLE = 'Спасибо'
const THANKS_TEXT = 'Ваше сообщение отправлено, мы свяжемся с вами!'
const SUBJECT = 'Как мы можем Вам помочь?'
const FIRST_NAME = 'Имя'
const PHONE = 'Телефон'
const EMAIL = 'E-mail'
const MESSAGE = 'Сообщение'
const SUBMIT = 'Отправить'
const FORM_ID = 'contact-us-form'

const SUBJECT_OPTIONS = [
    {
        label: 'I need help with a booking',
        value: 'I need help with a booking',
    },
    {
        label: 'I need help with the website',
        value: 'I need help with the website',
    },
    {
        label: 'I need help finding the right Xplorie Vacation for me',
        value: 'I need help finding the right Xplorie Vacation for me',
    },
    {
        label: 'I want to be one of Xplories awesome Activity Providers',
        value: 'I want to be one of Xplories awesome Activity Providers',
    },
    {
        label: 'I want to be one of Xplories amazing Participating Properties',
        value: 'I want to be one of Xplories amazing Participating Properties',
    },
    {
        label: 'I have questions about becoming an Xplorie partner',
        value: 'I have questions about becoming an Xplorie partner',
    },
    {
        label: 'I want to become an Xplorie participating property',
        value: 'I want to become an Xplorie participating property',
    },
]

// Defining fields
const fields = [
    {
        name: 'firstName',
        placeholder: FIRST_NAME,
        componentType: COMPONENT_INPUT,
        type: 'text',
        isRequired: true,
        className: 'item',
    },
    {
        name: 'email',
        placeholder: EMAIL,
        componentType: COMPONENT_INPUT,
        type: 'email',
        isRequired: true,
        className: 'item',
    },
    {
        name: 'phone',
        placeholder: PHONE,
        componentType: COMPONENT_INPUT,
        type: 'text',
        isRequired: true,
        className: 'item',
    },
    {
        name: 'subject',
        placeholder: SUBJECT,
        componentType: COMPONENT_SELECT,
        isRequired: false,
        className: 'item',
    },
    {
        name: 'message',
        placeholder: MESSAGE,
        componentType: COMPONENT_TEXTAREA,
        isRequired: false,
        className: 'item',
    },
]

// Implementing validators
const validate = (values) => {
    if (!values) return {}

    const errors = Object.assign(
        {},
        validateField(
            validateSubject,
            values.subject,
            'subject'
        ),
        validateField(
            validateFirstName,
            values.firstName,
            'firstName'
        ),
        validateField(
            validatePhone,
            values.phone,
            'phone'
        ),
        validateField(
            validateEmail,
            values.email,
            'email'
        ),
    )

    return errors
}

const ThankForm = () => {
    return (
        <div className="contact-us-form-wrapper clearfix">
            <div className="row header-row clearfix no-margin">
                <div className="col-xs-12 text-center">
                    <h2 className="sub-title-spot text-usual-gray font-italic">
                        { THANKS_TITLE }
                    </h2>
                    <span className="text-light-gray font-usual">
                        { THANKS_TEXT }
                    </span>
                </div>
            </div>
        </div>
    )
}

class ContactUsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sent: false,
            subjectOptions: SUBJECT_OPTIONS,
            subjectValue: null,
        }
    }
    componentDidMount() {
        const {
            initialize,
            subjectValue,
            subjectOptions,
        } = this.props

        const nextState = {}

        if (typeof subjectOptions !== 'undefined') {
            nextState.subjectOptions = subjectOptions
        }

        this.setState(nextState)

        if (typeof subjectValue !== 'undefined' && subjectValue !== null) {
            initialize({
                subject: subjectValue,
            })
        }
    }
    render() {
        const {
            handleSubmit,
            submitting,
        } = this.props

        const {
            sent,
            subjectOptions,
        } = this.state

        if (sent) {
            return <ThankForm />
        }

        return (
            <div className="contact-us-form-wrapper clearfix">
                <form
                    className={ `component form ${FORM_ID}` }
                    onSubmit={ handleSubmit(this.formSubmit.bind(this)) }
                >
                    <FormGroup>
                            {
                                fields.map(
                                    (field) => {
                                        const inputField =
                                            (field.componentType === COMPONENT_SELECT)
                                            ? Object.assign(
                                                {},
                                                field,
                                                {
                                                    options: subjectOptions,
                                                }
                                            )
                                            : field
                                        return (
                                            <InputHelperComponent
                                                field={ inputField }
                                                key={ field.name }
                                            />
                                        )
                                    }
                                )
                            }
                            <Button
                                className="hGradBtn"
                                disabled={ submitting }
                                type="submit"
                            >
                                { SUBMIT }
                            </Button>
                    </FormGroup>
                </form>
            </div>
        )
    }
    formSubmit(values) {
        const { onSubmitAction } = this.props
        const data = ContactUsForm.collectFormData(values)
        onSubmitAction(data)
        this.setState({
            sent: true,
        })
    }

    static collectFormData(values) {
        const data = {}

        Object.keys(values).forEach((key) => {
            data[key] = values[key]
        })

        return data
    }

}

const reduxFormSettings = reduxForm({
    form: FORM_ID,
    validate,
})(ContactUsForm)

// Mapping component state
const mapStateToProps = () => {
    return {
        initialValues: {
            subject: '',
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            message: '',
        },
        enableReinitialize: true,
    }
}

// Mapping component dispatcher
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitAction: (formData) => {
            dispatch(
                submitFormData(formData)
            )
        },
    }
}

const ContactUsFormConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(reduxFormSettings)

export default ContactUsFormConnect

export { fields }

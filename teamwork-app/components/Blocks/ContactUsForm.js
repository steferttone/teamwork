import React, { Component } from 'react'

import { Field, reduxForm } from 'redux-form'

import debug from 'helpers/debugLogger'

const FORM_ID = 'contact-us-form'

const IS_REQUIRED = 'Поле обязательно для заполнения'
const TOO_LONG = 'Имя слишком длинное'
const WRONG_EMAIL = 'Некорректный Email'
const PHONE_TOO_SHORT = 'Телефон слишком короткий'

const validate = (values) => {
    const errors = {}
    if (!values.name) {
        errors.name = IS_REQUIRED
    } else if (values.name.length > 20) {
        errors.name = TOO_LONG
    }
    if (!values.email) {
        errors.email = IS_REQUIRED
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = WRONG_EMAIL
    }
    if (!values.phone) {
        errors.phone = IS_REQUIRED
    } else if (values.phone.length < 5) {
        errors.phone = PHONE_TOO_SHORT
    }

    return errors
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
    return (
        <div className="item">
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    )
}

const renderTopic = ({ meta: { touched, error, warning } }) => {
    return (
        <div className="item">
            <select>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    )
}

class ContactUsForm extends Component {
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props
        debug.log(handleSubmit)
        return (
            <form onSubmit={handleSubmit} className={ FORM_ID }>
                <Field name="topic" component={renderTopic}/>
                <Field name="name" component={renderField} type="text" label="Имя"/>
                <Field name="phone" component={renderField} type="text" label="Телефон"/>
                <Field name="email" component={renderField} type="email" label="Email"/>
                <div className="item">
                    <Field name="notes" component="textarea"/>
                </div>
                <button className="hGradBtn" type="submit" disabled={pristine || submitting}>Submit</button>
                <button className="hGradBtn" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </form>
        )
    }
}

export default reduxForm({
    form: FORM_ID,
    validate,
})(ContactUsForm)

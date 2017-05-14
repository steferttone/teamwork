import React, { Component } from 'react'

import Select from 'react-select'

import 'react-select/dist/react-select.css'

import {
    Field,
} from 'redux-form'

const COMPONENT_INPUT = 'input'
const COMPONENT_SELECT = 'select'
const COMPONENT_TEXTAREA = 'textarea'

const normalizeReduxField = (reduxField) => {
    const normalizedField = Object.assign({}, reduxField)

    delete normalizedField.error
    delete normalizedField.visited
    delete normalizedField.initialValue
    delete normalizedField.autofill
    delete normalizedField.onUpdate
    delete normalizedField.valid
    delete normalizedField.invalid
    delete normalizedField.dirty
    delete normalizedField.pristine
    delete normalizedField.active
    delete normalizedField.touched
    delete normalizedField.autofilled

    return normalizedField
}

// Implementing fields
const RenderInputField = (props) => {
    const {
        className,
        input,
        placeholder,
        type,
        meta: {
            touched,
            error,
            warning,
        },
    } = props.options
    const errorClass = (touched && error) ? ' error' : ''
    return (
        <div className={`${className}${errorClass}`}>
            <input
                { ...input }
                placeholder={ placeholder }
                type={ type }
            />
            {
                touched && (
                    (error && <span>{ error }</span>) ||
                    (warning && <span>{ warning }</span>)
                )
            }
        </div>
    )
}

const RenderTextareaField = (props) => {
    const {
        className,
        input,
        placeholder,
        meta: {
            touched,
            error,
            warning,
        },
    } = props.options
    const errorClass = (touched && error) ? ' error' : ''
    return (
        <div className={`${className}${errorClass}`}>
            <textarea { ...input } placeholder={ placeholder }></textarea>
            {
                touched && (
                    (error && <span>{ error }</span>) ||
                    (warning && <span>{ warning }</span>)
                )
            }
        </div>
    )
}

class RenderSelectField extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }
    onChange({ value }) {
        this.props.options.input.onChange(value)
    }
    render() {
        const {
            className,
            input,
            name,
            placeholder,
            options,
            meta: {
                touched,
                error,
                warning,
            },
        } = this.props.options

        const errorClass = (touched && error) ? ' error' : ''

        return (
            <div className={`${className}${errorClass}`}>
                <Field name={ input.name } component="select">
                    <option value="">{ placeholder }</option>
                    {
                        options.map((option, key) => {
                            return (
                                <option value={ option.value } key={ key }>{ option.label }</option>
                            )
                        })
                    }
                </Field>
                <input type="hidden" { ...input } />
                {
                    touched && (
                        (error && <span>{ error }</span>) ||
                        (warning && <span>{ warning }</span>)
                    )
                }
            </div>
        )
    }
}

// Implementing fields
const renderHelperField = (props) => {
    const {
        componentType,
    } = props

    switch (componentType) {
    case COMPONENT_TEXTAREA: {
        return (
            <RenderTextareaField options={ props } />
        )
    }
    case COMPONENT_SELECT: {
        return (
            <RenderSelectField options={ props } />
        )
    }
    default: {
        return (
            <RenderInputField options={ props } />
        )
    }
    }
}

// Component
class InputHelperComponent extends Component {
    render() {
        const {
            field,
        } = this.props

        const fieldClassName = `${field.className} ${field.isRequired ? 'required' : ''}`

        const selectedOptions = (field.componentType === 'select')
            ? field.options
            : null
        return (
            <Field
                { ...field }
                className={ fieldClassName }
                component={ renderHelperField }
                options={ selectedOptions }
            />
        )
    }
}

export default {}

export {
    normalizeReduxField,
    InputHelperComponent,
    COMPONENT_INPUT,
    COMPONENT_SELECT,
    COMPONENT_TEXTAREA,
}

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

export default {}

export { normalizeReduxField }

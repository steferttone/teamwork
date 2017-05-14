import regexps from 'helpers/regexps.json'

const TITLE_REGEX = new RegExp(regexps.TITLE_REGEX)
const FIRST_NAME_REGEX = new RegExp(regexps.FIRST_NAME_REGEX)
const LAST_NAME_REGEX = new RegExp(regexps.LAST_NAME_REGEX)
const EMAIL_REGEX = new RegExp(regexps.EMAIL_REGEX)
const PHONE_REGEX = new RegExp(regexps.PHONE_REGEX)
const MASKED_CARD_NUMBER_REGEX = new RegExp(regexps.MASKED_CARD_NUMBER_REGEX)
const EXPIRED_DATE_REGEX = new RegExp(regexps.EXPIRED_DATE_REGEX)
const CARD_CODE_REGEX = new RegExp(regexps.CARD_CODE_REGEX)
const COUNTRY_REGEX = new RegExp(regexps.COUNTRY_REGEX)
const CITY_REGEX = new RegExp(regexps.CITY_REGEX)
const STREET_REGEX = new RegExp(regexps.STREET_REGEX)
const STATE_PROV_REGEX = new RegExp(regexps.STATE_PROV_REGEX)
const CITY_STATE_REGEX = new RegExp(regexps.CITY_STATE_REGEX)
const POSTAL_CODE_REGEX = new RegExp(regexps.POSTAL_CODE_REGEX)
const MONTH_MM_REGEX = new RegExp(regexps.MONTH_MM_REGEX)
const YEAR_YYYY_REGEX = new RegExp(regexps.YEAR_YYYY_REGEX)
const SECURITY_CODE_REGEX = new RegExp(regexps.SECURITY_CODE_REGEX)
const COMPANY_NAME_REGEX = new RegExp(regexps.COMPANY_NAME_REGEX)
const SUBJECT_REGEX = new RegExp(regexps.SUBJECT_REGEX)
const EXTERNAL_LINK = new RegExp(regexps.EXTERNAL_LINK)
const VALID_URL = new RegExp(regexps.VALID_URL, 'gi')

const MINIMUM_PASSWORD_LENGTH = 1

// Validates field
const validateField = (validationCallback, field, fieldName) => {
    const validationResult = validationCallback(field || '')

    if (!validationResult.isValid) {
        const errorsObject = {}

        errorsObject[fieldName] = validationResult.errorMessage

        return errorsObject
    }

    return null
}

const isPasswordValid = (password, length) => {
    return password.length >= length
}

const isStringValid = (inputString, regex) => {
    return inputString.match(regex) !== null
}

const buildValidationObject = (isValid, errorMessage) => {
    return {
        isValid,
        errorMessage,
        componentClass: isValid ? 'success' : 'error',
    }
}

const validatePassword = (password) => {
    const isValid = isPasswordValid(password, MINIMUM_PASSWORD_LENGTH)
    const errorMessage = `Password should be longer then ${MINIMUM_PASSWORD_LENGTH}`

    return buildValidationObject(isValid, errorMessage)
}

const validateMonthMM = (value) => {
    const isValid = isStringValid(value, MONTH_MM_REGEX)
    const errorMessage = 'Enter month in MM format'

    return buildValidationObject(isValid, errorMessage)
}

const validateYearYYYY = (value) => {
    const isValid = isStringValid(value, YEAR_YYYY_REGEX)
    const errorMessage = 'Enter month in YYYY format'

    return buildValidationObject(isValid, errorMessage)
}

const validateSecurityCode = (value) => {
    const isValid = isStringValid(value, SECURITY_CODE_REGEX)
    const errorMessage = 'Enter valid 3 digits CV code'

    return buildValidationObject(isValid, errorMessage)
}

const validateTitle = (value) => {
    const isValid = isStringValid(value, TITLE_REGEX)
    const errorMessage = 'This field is requried'

    return buildValidationObject(isValid, errorMessage)
}

const validateFirstName = (value) => {
    const isValid = isStringValid(value, FIRST_NAME_REGEX)
    const errorMessage = 'Input valid first name'

    return buildValidationObject(isValid, errorMessage)
}

const validateLastName = (value) => {
    const isValid = isStringValid(value, LAST_NAME_REGEX)
    const errorMessage = 'Input valid last name'

    return buildValidationObject(isValid, errorMessage)
}

const validatePhone = (value) => {
    const isValid = isStringValid(value, PHONE_REGEX)
    const errorMessage = 'This field is requried'

    return buildValidationObject(isValid, errorMessage)
}

const validateEmail = (value) => {
    const isValid = isStringValid(value, EMAIL_REGEX)
    const errorMessage = 'Entered email is not valid'

    return buildValidationObject(isValid, errorMessage)
}

const validateCountry = (value) => {
    const isValid = isStringValid(value, COUNTRY_REGEX)
    const errorMessage = 'Please select country'

    return buildValidationObject(isValid, errorMessage)
}

const validateStateProv = (value) => {
    const isValid = isStringValid(value, STATE_PROV_REGEX)
    const errorMessage = 'This field is requried'

    return buildValidationObject(isValid, errorMessage)
}

const validateCity = (value) => {
    const isValid = isStringValid(value, CITY_REGEX)
    const errorMessage = 'This field is requried'

    return buildValidationObject(isValid, errorMessage)
}

const validateStreetAndBuilding = (value) => {
    const isValid = isStringValid(value, STREET_REGEX)
    const errorMessage = 'This field is requried'

    return buildValidationObject(isValid, errorMessage)
}

const validatePostalCode = (value) => {
    const isValid = isStringValid(value, POSTAL_CODE_REGEX)
    const errorMessage = 'Please input valid 5-6 digits code'

    return buildValidationObject(isValid, errorMessage)
}

const validateMaskedCardNumber = (value) => {
    const isValid = isStringValid(value, MASKED_CARD_NUMBER_REGEX)
    const errorMessage = 'Input PAN of your credit card'

    return buildValidationObject(isValid, errorMessage)
}

const validateExpirationDate = (value) => {
    const isValid = isStringValid(value, EXPIRED_DATE_REGEX)
    const errorMessage = 'This field is requried'

    return buildValidationObject(isValid, errorMessage)
}

const validateCardCode = (value) => {
    const isValid = isStringValid(value, CARD_CODE_REGEX)
    const errorMessage = 'This field is requried'

    return buildValidationObject(isValid, errorMessage)
}

const validateCompanyName = (value) => {
    const isValid = isStringValid(value, COMPANY_NAME_REGEX)
    const errorMessage = 'Please fill your company name'

    return buildValidationObject(isValid, errorMessage)
}

const validateCityState = (value) => {
    const isValid = isStringValid(value, CITY_STATE_REGEX)
    const errorMessage = 'Please fill your city and state/province'

    return buildValidationObject(isValid, errorMessage)
}

const validateSubject = (value) => {
    const isValid = isStringValid(value, SUBJECT_REGEX)
    const errorMessage = 'This field is required'

    return buildValidationObject(isValid, errorMessage)
}

const validateConfirmPassword = ({ newPassword, confirmPassword }) => {
    const isValid = newPassword === confirmPassword
    const errorMessage = 'New password and confirm password must be the same'

    return buildValidationObject(isValid, errorMessage)
}

const isExternalLink = (url) => {
    const host = window.location.hostname

    const linkHost = (linkUrl) => {
        if (EXTERNAL_LINK.test(linkUrl)) {
            const parser = document.createElement('a')
            parser.href = linkUrl
            return parser.hostname
        }
        return window.location.hostname
    }

    return host !== linkHost(url)
}

const isValidUrl = (url) => {
    return VALID_URL.test(url)
}

const decodeHTMLEntities = (str) => {
    const element = document.createElement('div')

    if (str && typeof str === 'string') {
        element.innerHTML = str
            .replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '')
            .replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '')
        const result = element.textContent
        element.textContent = ''
        return result
    }

    return str
}

export {
    validateField,
    validateTitle,
    validateFirstName,
    validateLastName,
    validatePhone,
    validateEmail,
    validateCountry,
    validateStateProv,
    validateCity,
    validateStreetAndBuilding,
    validatePostalCode,
    validateMaskedCardNumber,
    validateExpirationDate,
    validateCardCode,
    validateMonthMM,
    validateYearYYYY,
    validateSecurityCode,
    validatePassword,
    validateCompanyName,
    validateCityState,
    validateSubject,
    validateConfirmPassword,
    isExternalLink,
    isValidUrl,
    decodeHTMLEntities,
}

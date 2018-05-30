import {
    CARD_TYPE_VISA,
    CARD_TYPE_MASTER_CARD,
    CARD_TYPE_DISCOVER,
    CARD_TYPE_UNKNOWN,
} from 'components/FormComponents/CardSchemeGlyph'

import regexps from 'helpers/panRegExp.json'

const VISA_REGEX = new RegExp(regexps.VISA_REGEX)
const MASTERCARD_REGEX = new RegExp(regexps.MASTERCARD_REGEX)
const DISCOVER_REGEX = new RegExp(regexps.DISCOVER_REGEX)

const visaCardValidate = (pan) => {
    if (!pan) {
        return false
    }

    if (VISA_REGEX.test(pan.toString())) {
        return true
    }

    return false
}

const mastercardCardValidate = (pan) => {
    if (!pan) {
        return false
    }

    if (MASTERCARD_REGEX.test(pan.toString())) {
        return true
    }

    return false
}

const discoverCardValidate = (pan) => {
    if (!pan) {
        return false
    }

    if (DISCOVER_REGEX.test(pan.toString())) {
        return true
    }

    return false
}

const panValidate = (pan) => {
    if (visaCardValidate(pan)) {
        return CARD_TYPE_VISA
    }

    if (mastercardCardValidate(pan)) {
        return CARD_TYPE_MASTER_CARD
    }

    if (discoverCardValidate(pan)) {
        return CARD_TYPE_DISCOVER
    }

    return CARD_TYPE_UNKNOWN
}

const luhnChecksumValidate = (pan) => {
    if (!pan) {
        return false
    }

    const cardPan = pan.toString()

    if (!(/^[0-9]{12,19}$/.test(cardPan))) {
        return false
    }

    let isEven = false
    let checksum = 0

    for (let i = cardPan.length - 1; i >= 0; i -= 1) {
        const currentDigit = cardPan.charAt(i)
        let currentDigitValue = parseInt(currentDigit, 10)

        if (isEven) {
            currentDigitValue *= 2

            if (currentDigitValue > 9) {
                currentDigitValue -= 9
            }
        }

        checksum += currentDigitValue
        isEven = !isEven
    }

    return (checksum % 10) === 0
}

export {
    // Checksum validators
    luhnChecksumValidate,
    // PAN validators
    panValidate,
    // PAN detectors
    visaCardValidate,
    mastercardCardValidate,
    discoverCardValidate,
}

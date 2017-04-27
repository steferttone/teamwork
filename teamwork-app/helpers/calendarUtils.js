import { DateUtils } from 'react-day-picker'
import moment from 'moment'
import dateFormat from 'dateformat'

const DATEPICKER_FORMAT = 'MM/DD/YYYY'
const MAX_DAYS_IN_RANGE = 30

const timeIsoToDate = (date) => {
    return dateFormat(
        parseInt(date, 10),
        DATEPICKER_FORMAT.toLowerCase()
    )
}

const calendarDayToTimeIso = (date) => {
    return new Date(
        moment(
            new Date(date)
        )
        .format(DATEPICKER_FORMAT)
    )
    .getTime()
}

const dateToCalendarDay = (date) => {
    return moment(date, 'L').toDate()
}

const getDayFromAvailability = (day, availability) => {
    const avDay = moment(day).format('YYYY-MM-DD')
    if (!availability) {
        return false
    }
    const avYear = moment(new Date(avDay)).year()
    const hasYear = {}.hasOwnProperty.call(availability, avYear)

    if (!hasYear) {
        return false
    }

    const currentYear = availability[avYear]
    const avMonth = moment(new Date(avDay)).month()
    const hasMonth = {}.hasOwnProperty.call(currentYear, avMonth)

    if (!hasMonth) {
        return false
    }

    const currentMonth = currentYear[avMonth]
    const avMonthDay = moment(new Date(avDay)).date()
    const hasDay = {}.hasOwnProperty.call(currentMonth, avMonthDay)

    if (!hasDay) {
        return false
    }

    return currentMonth[avMonthDay]
}

const buildDatesRange = (range) => {
    const diff = Math.abs(
        moment(range.from).diff(range.to, 'days')
    )

    let currentDay = moment(range.from).toDate()
    const daysRange = [currentDay]

    for (let i = 0; i < diff; i += 1) {
        const date = moment(currentDay).add(1, 'd').toDate()
        currentDay = date
        daysRange.push(currentDay)
    }
    return daysRange
}

const isRangeValid = (fromDate, toDate, availability) => {
    const from = moment(
        new Date(fromDate)
    ).format('YYYY-MM-DD')
    const to = moment(
        new Date(toDate)
    ).format('YYYY-MM-DD')

    const diff = Math.abs(
        moment(from).diff(to, 'days')
    ) + 1

    if (diff > MAX_DAYS_IN_RANGE) {
        return false
    }
    if (!availability) {
        return true
    }
    const avFromDate = getDayFromAvailability(from, availability)

    if (avFromDate
        && avFromDate.minLoS > diff
        && diff < MAX_DAYS_IN_RANGE
    ) {
        return false
    }

    const range = {
        from,
        to,
    }

    const datesRange = buildDatesRange(range)

    const noDisabledDates = datesRange.every(
        (date) => {
            const availabilityDate = getDayFromAvailability(date, availability)
            if (
                DateUtils.isDayInRange(date, {
                    from: moment(new Date(fromDate)).toDate(),
                    to: moment(new Date(toDate)).toDate(),
                })
                && !availabilityDate
            ) {
                return false
            }
            return true
        }
    )

    if (!noDisabledDates) {
        return false
    }

    return true
}

const prepareArriveDate = (from) => {
    let arrive = from || ''

    if (arrive
        && arrive.toString().match(/^[0-9]{10,13}$/)
    ) {
        arrive = timeIsoToDate(arrive)
    }
    return arrive
}

const prepareDepartDate = (to) => {
    let depart = to || ''

    if (depart
        && depart.toString().match(/^[0-9]{10,13}$/)
    ) {
        depart = timeIsoToDate(depart)
    }
    return depart
}

const getMonthRange = (arrive, depart) => {
    const currentYearTemp = moment(new Date(depart)).isValid()
        ? moment(new Date(depart)).format('MM/DD/YYYY')
        : moment().format('MM/DD/YYYY')

    const currentYear = moment(new Date(arrive)).isValid()
        ? moment(new Date(arrive)).format('MM/DD/YYYY')
        : currentYearTemp

    const fromMonth = new Date(currentYear)
    const toMonth = moment().add(2, 'y').toDate()

    return {
        fromMonth,
        toMonth,
    }
}

const parseAvailability = (availability) => {
    const parsed = {}

    if (availability.availabilityDates) {
        availability.availabilityDates.forEach(
            (avDay) => {
                const avYear = moment(new Date(avDay.date)).year()
                const avMonth = moment(new Date(avDay.date)).month()
                const avMonthDay = moment(new Date(avDay.date)).date()
                const hasYear = {}.hasOwnProperty.call(parsed, avYear)

                if (!hasYear) {
                    parsed[avYear] = {}
                }

                const hasMonth = {}.hasOwnProperty.call(parsed[avYear], avMonth)

                if (!hasMonth) {
                    const currentYear = parsed[avYear]
                    currentYear[avMonth] = {}
                }

                const currentYear = parsed[avYear]
                const currentMonth = currentYear[avMonth]

                currentMonth[avMonthDay] = avDay
            }
        )
    }

    return parsed
}

const compileDateRange = (startDate, endDate) => {
    const checkIn = moment(startDate)
    const checkOut = moment(endDate)

    if (checkIn.format('M') === checkOut.format('M')) {
        return ''
            .concat(checkIn.format('MMMM'))
            .concat(' ')
            .concat(checkIn.format('DD'))
            .concat(' - ')
            .concat(checkOut.format('DD'))
            .concat(', ')
            .concat(checkIn.format('YYYY'))
    }

    if (checkIn.format('YYYY') !== checkOut.format('YYYY')) {
        return `${checkIn.format('MMMM DD, YYYY')} - ${checkOut.format('MMMM DD, YYYY')}`
    }

    return `${checkIn.format('MMMM DD')} - ${checkOut.format('MMMM DD, YYYY')}`
}

export {
    timeIsoToDate,
    calendarDayToTimeIso,
    dateToCalendarDay,
    getDayFromAvailability,
    isRangeValid,
    prepareArriveDate,
    prepareDepartDate,
    getMonthRange,
    parseAvailability,
    compileDateRange,
}

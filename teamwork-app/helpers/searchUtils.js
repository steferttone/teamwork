import moment from 'moment'
// Importing hash history
import { hashHistory } from 'react-router'

const SEARCH_TYPE_ADVANCED = 'advanced'
const SEARCH_TYPE_BASIC = 'basic'

const READ_ONLY_SEARCH = 'READ_ONLY_SEARCH'
const READ_ONLY_DATEPICKER = 'READ_ONLY_DATEPICKER'
const READ_ONLY_GUESTS = 'READ_ONLY_GUESTS'

const stringifySearchQuery = (searchQuery) => {
    const query = Object.keys(searchQuery)
        .map((key) => {
            // Ignore empty parameters
            if (searchQuery[key] === '') {
                return null
            }

            // Ignore DisplayName property
            if (key === 'displayName') {
                return null
            }

            if (key === 'authState') {
                return null
            }
            return `${key}=${searchQuery[key]}`
        })
        .filter((element) => {
            return element !== null
        })

    return query.join(',')
}

const stringifyDestination = (destination) => {
    const result = Object.keys(destination).map(
        (field) => {
            if (destination[field] !== '') {
                return destination[field]
            }
            return null
        }
    )
    .filter((element) => {
        return element !== null
    })

    return result.join(', ')
}

const buildPathObject = (pathname, query) => {
    const pathArray = pathname.split('/').filter((pathItem) => {
        if (pathItem.length > 0) {
            return true
        }

        return false
    })

    const pathObject = Object.assign(
        {},
        query,
        {
            destination: pathArray[1],
            stayDateRange: {
                checkIn: pathArray[2],
                checkOut: pathArray[3],
            },
            guestsCount: parseInt(pathArray[4], 10),
        }
    )
    return pathObject
}

const buildSearchQuery = (path, searchCriteria) => {
    const { pathname, query } = path
    const pathObject = Object.assign(
        {},
        searchCriteria,
        buildPathObject(pathname, query),
    )

    delete pathObject.searchType
    delete pathObject.amenities

    const arriveDate = parseInt(pathObject.stayDateRange.checkIn, 10)
    const departDate = parseInt(pathObject.stayDateRange.checkOut, 10)

    const arrive = moment(new Date(arriveDate)).format('YYYY-MM-DD')
    const depart = moment(new Date(departDate)).format('YYYY-MM-DD')

    return Object.assign(
        {},
        pathObject,
        {
            stayDateRange: {
                checkIn: arrive,
                checkOut: depart,
            },
        },
    )
}

const prepareRequestObject = () => {
    const location = hashHistory.getCurrentLocation()
    const { pathname, search } = location

    const destination = {}

    let activities = []

    const queryRegexp = pathname.match(/\/.*\/([^/]+)\/(\d+)\/(\d+)\/(\d+)/)

    if (queryRegexp) {
        queryRegexp[1]
            .split(',')
            .forEach((property) => {
                const propertyArray = property.split('=')

                if (propertyArray.length < 2 || propertyArray[1].length === 0) {
                    return
                }

                if (propertyArray[0] === 'state') {
                    propertyArray[0] = 'stateProvince'
                }

                if (propertyArray[0] === 'activities') {
                    activities = propertyArray[1].split(',')
                    return
                }

                destination[propertyArray[0]] = propertyArray[1]
            })
    }

    const queryAttrs = {}

    search
        .split('&')
        .forEach((property) => {
            const propertyArray = property.split('=')
            if (propertyArray[0] === 'authState') {
                return
            }
            if (propertyArray[0][0] === '?') {
                propertyArray[0] = propertyArray[0].substring(1)
            }

            if (propertyArray.length < 2 || propertyArray[1].length === 0) {
                return
            }

            if (propertyArray[0] === 'bedroomsCount') {
                queryAttrs.accommodation = {}
                queryAttrs.accommodation[[propertyArray[0]]] = propertyArray[1]
                return
            }

            if (
                propertyArray[0] === 'options' ||
                propertyArray[0] === 'activities'

            ) {
                queryAttrs[propertyArray[0]] = propertyArray[1].split(',')
                return
            }

            if (propertyArray[0] === 'amenities') {
                queryAttrs[propertyArray[0]] = propertyArray[1].split(',')
                return
            }

            if (propertyArray[0] === 'pageNumber') {
                queryAttrs[propertyArray[0]] = propertyArray[1]
                return
            }

            queryAttrs[propertyArray[0]] = [propertyArray[1]]
        })

    const request = {
        destination,
        stayDateRange: {
            checkIn: moment(parseInt(queryRegexp[2], 10)).format('YYYY-MM-DD'),
            checkOut: moment(parseInt(queryRegexp[3], 10)).format('YYYY-MM-DD'),
        },
        stayCandidate: {
            adultGuestCount: parseInt(queryRegexp[4], 10),
        },
        ...queryAttrs,
    }

    if (activities.length > 0) {
        request.activities = activities
    }

    return request
}

const isReadOnly = (readonly, row) => {
    if (!readonly) {
        return false
    }
    return readonly.some(
        (prop) => {
            if (prop === row) {
                return true
            }
            return false
        }
    )
}

const prepareReadOnlyObject = (readonly) => {
    const readOnlyObject = {
        search: isReadOnly(readonly, READ_ONLY_SEARCH),
        datepicker: isReadOnly(readonly, READ_ONLY_DATEPICKER),
        guests: isReadOnly(readonly, READ_ONLY_GUESTS),
    }

    return readOnlyObject
}

export {
    stringifySearchQuery,
    stringifyDestination,
    buildPathObject,
    buildSearchQuery,
    prepareRequestObject,
    prepareReadOnlyObject,
    isReadOnly,
    SEARCH_TYPE_ADVANCED,
    SEARCH_TYPE_BASIC,
    READ_ONLY_SEARCH,
    READ_ONLY_DATEPICKER,
    READ_ONLY_GUESTS,
}

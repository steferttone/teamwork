import amenityGroups from 'reducers/mock-data/amenitiesList.json'

const amenitiesMap = {
    basics: 'The Basics',
    internet: 'Internet (free)',
    parking: 'Parking (comp)',
    microwave: 'Microwave',
    refrigerator: 'Refrigerator',
    television: 'Television',
    dishwasher: 'Dishwasher',
    stove_oven: 'Stove/Oven',
    heater: 'Heater',
    washer_dryer: 'Washer/Dryer',
    fun_extras: 'Fun Extras',
    spa: 'Spa',
    fitness: 'Fitness',
    pool: 'Pool (private)',
    housekeeping: 'Housekeeping',
    fireplace: 'Fireplace',
    patio_balcony: 'Patio/Balcony',
    grill: 'Grill',
    hot_tub: 'Hot Tub (private)',
    air_conditioner: 'Air Conditioner',
    guest_options: 'Guest Options',
    disability_access: 'Disability Access',
    pet_friendly: 'Pet Friendly',
}

const getAmenityNameByCode = (code) => {
    const amenityData = {
        code,
        name: code,
    }
    amenityGroups.map(
        (amenity) => {
            amenity.elements.map(
                (am) => {
                    if (am.name === code) {
                        amenityData.name = am.displayName
                    }
                    return true
                }
            )
            return false
        }
    )

    return amenityData.name
}

const getAmenityCodeByName = (name) => {
    let foundKey = name

    Object.keys(amenitiesMap).forEach((amenityKey) => {
        if (amenitiesMap[amenityKey] === name) {
            foundKey = amenitiesMap[amenityKey]
        }
    })

    return foundKey
}

const getAmenityGroupByCode = (code) => {
    const filteredGroups = amenityGroups.filter((amenityGroup) => {
        return amenityGroup.elements.indexOf(code) !== -1
    })

    if (filteredGroups.length > 0) {
        return filteredGroups[0]
    }

    return null
}

const categorizeAmenities = (amenitiesList) => {
    const groups = {}

    amenitiesList.forEach((amenitiesListItem) => {
        const group = getAmenityGroupByCode(amenitiesListItem.code)

        if (!{}.hasOwnProperty.call(groups, group.name)) {
            groups[group.name] = Object.assign(
                {},
                group,
                {
                    elements: [],
                }
            )
        }

        groups[group.name].elements.push(amenitiesListItem)
    })

    return groups
}

const fillAmenityGroup = (amenityGroup, amenitiesList) => {
    const filledGroup = {
        title: amenityGroup.title,
        name: amenityGroup.name,
        elements: [],
    }

    amenityGroup.elements.map(
        (element) => {
            const filteredElements = amenitiesList.filter(
                (amenity) => {
                    if (amenity.code === element.name) {
                        return true
                    }
                    return false
                }
            )

            if (filteredElements.length === 0) {
                filledGroup.elements.push(
                    Object.assign(
                        {},
                        element,
                        {
                            amount: 0,
                        }
                    )
                )
                return true
            }
            const newElement = Object.assign(
                {},
                element,
                {
                    amount: filteredElements[0].amount,
                }
            )
            filledGroup.elements.push(newElement)
            return true
        }
    )
    return filledGroup
}

const prepareAmenitiesFilterData = (amenitiesList) => {
    const groups = []
    amenityGroups.map(
        (amenityGroup) => {
            groups.push(
                fillAmenityGroup(amenityGroup, amenitiesList)
            )
            return amenityGroup
        }
    )
    return groups
}

export default amenitiesMap

export {
    amenitiesMap,
    amenityGroups,
    categorizeAmenities,
    getAmenityNameByCode,
    getAmenityCodeByName,
    prepareAmenitiesFilterData,
}

const AMENITY_ICON_AIR_CONDITIONER = 'air-conditioner'
const AMENITY_ICON_BEACH = 'beach'
const AMENITY_ICON_BIKING = 'biking'
const AMENITY_ICON_BOATING = 'boating'
const AMENITY_ICON_FISHING = 'fishing'
const AMENITY_ICON_GOLF = 'golf'
const AMENITY_ICON_HOT_TUB = 'hot-tub'
const AMENITY_ICON_INTERNET_ACCESS = 'internet-access'
const AMENITY_ICON_KITCHEN = 'kitchen'
const AMENITY_ICON_SKIING = 'skiing'
const AMENITY_ICON_SWIMMING_POOL = 'swimming-pool'
const AMENITY_ICON_WASHER_DRYER = 'washer-dryer'
const AMENITY_ICON_WHEELCHAIR_ACCESSIBLE = 'wheelchair-accessible'
const AMENITY_ICON_REFRIGERATOR = 'refrigerator'
const AMENITY_ICON_COFFEE_MAKER = 'coffee-maker'
const AMENITY_ICON_ICE_MAKER = 'ice-maker'
const AMENITY_ICON_MICROWAVE = 'microwave'
const AMENITY_ICON_TOASTER = 'toaster'
const AMENITY_ICON_COOKWARE = 'cookware'
const AMENITY_ICON_CEILING_FAN = 'ceiling-fan'
const AMENITY_ICON_LINENS = 'linens'

const AMENITY_ICON_UNDEFINED = 'undefined'

const aliasData = [
    {
        id: AMENITY_ICON_AIR_CONDITIONER,
        aliases: [AMENITY_ICON_AIR_CONDITIONER, 'Air Conditioning', 'Aircondition'],
    },
    {
        id: AMENITY_ICON_BEACH,
        aliases: [AMENITY_ICON_BEACH],
    },
    {
        id: AMENITY_ICON_BIKING,
        aliases: [AMENITY_ICON_BIKING],
    },
    {
        id: AMENITY_ICON_BOATING,
        aliases: [AMENITY_ICON_BOATING],
    },
    {
        id: AMENITY_ICON_FISHING,
        aliases: [AMENITY_ICON_FISHING],
    },
    {
        id: AMENITY_ICON_GOLF,
        aliases: [AMENITY_ICON_GOLF],
    },
    {
        id: AMENITY_ICON_HOT_TUB,
        aliases: [AMENITY_ICON_HOT_TUB],
    },
    {
        id: AMENITY_ICON_INTERNET_ACCESS,
        aliases: [AMENITY_ICON_INTERNET_ACCESS, 'Internet Access', 'Wi-Fi'],
    },
    {
        id: AMENITY_ICON_KITCHEN,
        aliases: [AMENITY_ICON_KITCHEN, 'Kitchen'],
    },
    {
        id: AMENITY_ICON_SKIING,
        aliases: [AMENITY_ICON_SKIING],
    },
    {
        id: AMENITY_ICON_SWIMMING_POOL,
        aliases: [AMENITY_ICON_SWIMMING_POOL],
    },
    {
        id: AMENITY_ICON_WASHER_DRYER,
        aliases: [AMENITY_ICON_WASHER_DRYER, 'Washer & Dryer'],
    },
    {
        id: AMENITY_ICON_WHEELCHAIR_ACCESSIBLE,
        aliases: [AMENITY_ICON_WHEELCHAIR_ACCESSIBLE],
    },
    {
        id: AMENITY_ICON_REFRIGERATOR,
        aliases: [AMENITY_ICON_REFRIGERATOR, 'Refrigerator'],
    },
    {
        id: AMENITY_ICON_COFFEE_MAKER,
        aliases: [AMENITY_ICON_COFFEE_MAKER, 'Coffee Maker'],
    },
    {
        id: AMENITY_ICON_ICE_MAKER,
        aliases: [AMENITY_ICON_ICE_MAKER, 'Ice Maker'],
    },
    {
        id: AMENITY_ICON_MICROWAVE,
        aliases: [AMENITY_ICON_MICROWAVE, 'Microwave'],
    },
    {
        id: AMENITY_ICON_TOASTER,
        aliases: [AMENITY_ICON_TOASTER, 'Toaster'],
    },
    {
        id: AMENITY_ICON_COOKWARE,
        aliases: [AMENITY_ICON_COOKWARE, 'Cookware'],
    },
    {
        id: AMENITY_ICON_CEILING_FAN,
        aliases: [AMENITY_ICON_CEILING_FAN, 'Ceiling Fans'],
    },
    {
        id: AMENITY_ICON_LINENS,
        aliases: [AMENITY_ICON_LINENS, 'Linens'],
    },
]

const getIconIdByAlias = (aliasName) => {
    let foundId = null

    aliasData.map((aliasDataItem) => {
        if (foundId !== null) {
            return aliasDataItem
        }

        const aliasIndex = aliasDataItem.aliases.indexOf(aliasName)

        if (aliasIndex !== -1) {
            foundId = aliasDataItem.id
        }

        return aliasDataItem
    })

    return foundId
}

const getAmenityIconId = (aliasName) => {
    if (typeof aliasName === 'undefined' || aliasName === null) {
        return AMENITY_ICON_UNDEFINED
    }

    const amenityIconId = getIconIdByAlias(aliasName)

    return amenityIconId === null
        ? AMENITY_ICON_UNDEFINED
        : amenityIconId
}

export default getAmenityIconId

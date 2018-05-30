import DataProvider from 'helpers/data-providers/DataProvider'
import DestinationDataProvider from 'helpers/data-providers/DestinationDataProvider'

const JSON_URL = 'activityCategories.json'
const NAME_KEY = 'name'
const NUMBER_OF_UNITS_KEY = 'numberOfUnits'

class ActivityCategoryProvider extends DataProvider {
    constructor(dispatch) {
        super(JSON_URL, dispatch)
    }
    getAll(onReady) {
        super.getAll(onReady)
    }
    getItemsByPrimaryKey(itemIds, onReady) {
        this.getItemsByName(itemIds, onReady)
    }
    getItemsByName(itemIds, onReady) {
        super.getItemsByKey(NAME_KEY, itemIds, (data) => {
            if (data.statusCode === 200) {
                const requiredDestinationsList = []

                data.response.forEach((activityCategoryItem) => {
                    if ({}.hasOwnProperty.call(activityCategoryItem, NUMBER_OF_UNITS_KEY)) {
                        activityCategoryItem[NUMBER_OF_UNITS_KEY].forEach((destinationItem) => {
                            requiredDestinationsList.push(destinationItem.name)
                        })
                    }
                })

                ActivityCategoryProvider
                    .requestDestinations(
                        data,
                        requiredDestinationsList,
                        onReady
                    )

                return
            }

            onReady(data)
        })
    }
    getActivitiesByDestinations(itemIds, onReady) {
        this.getAll((data) => {
            if (data.statusCode === 200) {
                const requiredActivityCategories = data.response
                    .map(ActivityCategoryProvider.getActivitiesByDestinationsIterator.bind(
                        this,
                        itemIds
                    ))
                    .filter((item) => {
                        return item !== null
                    })

                onReady(Object.assign(
                    data,
                    {
                        response: requiredActivityCategories,
                        responseText: JSON.stringify(requiredActivityCategories),
                    }
                ))

                return
            }

            onReady(Object.assign(
                data,
                {
                    response: [],
                    responseText: JSON.stringify([]),
                }
            ))
        })
    }
    static getActivitiesByDestinationsIterator(itemIds, activityCategory) {
        let requiredActivityCategory = null

        if ({}.hasOwnProperty.call(activityCategory, 'numberOfUnits')) {
            activityCategory.numberOfUnits.forEach((unitDetails) => {
                if (itemIds.indexOf(unitDetails.name) !== -1) {
                    requiredActivityCategory = Object.assign(
                        activityCategory,
                        {
                            currentAmount: unitDetails.amount,
                        }
                    )
                }
            })
        }

        return requiredActivityCategory
    }
    static requestDestinations(data, requiredDestinationsList, onReady) {
        if (requiredDestinationsList.length > 0) {
            const destinationDataProvider = new DestinationDataProvider()

            destinationDataProvider.getItemsByDestinations(
                requiredDestinationsList,
                (destinationsData) => {
                    if (destinationsData.statusCode === 200) {
                        onReady(
                            ActivityCategoryProvider.injectDestinations(
                                data,
                                destinationsData
                            )
                        )

                        return
                    }

                    onReady(data)
                    return
                }
            )

            return
        }

        onReady(data)
    }
    static injectDestinations(data, destinationsData) {
        if (data.response.length === 0 || destinationsData.response.length === 0) {
            return data
        }

        const injectedResult = DataProvider.injectRelations(
            data.response,
            destinationsData.response,
            NUMBER_OF_UNITS_KEY,
            NAME_KEY
        )

        return Object.assign(
            data,
            {
                response: injectedResult,
                responseText: JSON.stringify(injectedResult),
            }
        )
    }
}

export default ActivityCategoryProvider

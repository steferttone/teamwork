import DataProvider from 'helpers/data-providers/DataProvider'
import ActivityDataProvider from 'helpers/data-providers/ActivityDataProvider'

const JSON_URL = 'destinations.json'

class DestinationDataProvider extends DataProvider {
    constructor(dispatch) {
        super(JSON_URL, dispatch)
    }
    getNamesMap(onReady) {
        super.getAll((data) => {
            if (data.statusCode === 200) {
                const destinationsMap = {}

                data.response.forEach((destination) => {
                    destinationsMap[destination.name] = destination.displayName
                })

                onReady(destinationsMap)
            } else {
                onReady(null)
            }
        })
    }
    getAll(onReady) {
        super.getAll((data) => {
            if (data.statusCode === 200) {
                const requestedActivities = DataProvider
                    .collectUniqueItemsFromCollectionProperty(data.response, 'activities')

                DestinationDataProvider.requestActivities(
                    requestedActivities,
                    (activitiesCollection) => {
                        const injectedData = DestinationDataProvider
                            .injectActivities(data, activitiesCollection)

                        onReady(injectedData)
                    }
                )
            } else {
                onReady(data)
            }
        })
    }
    getItemsByDestinations(itemIds, onReady) {
        if (!itemIds || itemIds.length === 0) {
            this.getAll(onReady)

            return
        }

        this.getAll((data) => {
            if ({}.hasOwnProperty.call(data, 'response')) {
                const filteredResult = data.response.filter((dataItem) => {
                    return itemIds.indexOf(dataItem.name) !== -1
                })

                onReady(Object.assign(
                    data,
                    {
                        response: filteredResult,
                        responseText: JSON.stringify(filteredResult),
                    }
                ))

                return
            }

            onReady(data)
        })
    }
    static injectActivities(data, activitiesCollection) {
        const injectedResults = DataProvider.injectRelations(
            data.response,
            activitiesCollection,
            'activities',
            'name'
        )

        return Object.assign(
            data,
            {
                response: injectedResults,
                responseText: JSON.stringify(injectedResults),
            }
        )
    }
    static requestActivities(activityIds, onReady) {
        const activityDataProvider = new ActivityDataProvider()

        activityDataProvider.getItemsByPrimaryKey(activityIds, (activitiesResponse) => {
            if (activitiesResponse && activitiesResponse.statusCode === 200) {
                onReady(activitiesResponse.response)

                return
            }
        })
    }
}

export default DestinationDataProvider

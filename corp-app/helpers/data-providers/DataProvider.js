// Importing ajax wrapper for requesting JSON
import {
    jsonRequest,
    STATUS_ERROR,
    STATUS_OK,
} from 'handlers/ajaxJsonProvider'

class DataProvider {
    constructor(url, dispatch) {
        this.url = `json-data/${url}` || ''
        this.dispatch = dispatch || null
    }
    makeRequest(onSuccess, onError) {
        jsonRequest({
            url: this.url,
            dispatch: this.dispatch,
            onSuccess,
            onError: onError || null,
        })
    }
    getAll(onReady) {
        this.makeRequest(
            (data) => {
                onReady(DataProvider.buildResponseObject(data))
            },
            (data) => {
                onReady(DataProvider.buildResponseObject(
                    Object.assign(
                        data,
                        {
                            response: null,
                            responseText: '',
                        }
                    )
                ))
            }
        )
    }
    getItemsByKey(key, itemIds, onReady) {
        if (key && itemIds && itemIds.length > 0) {
            this.getAll((data) => {
                if (data.status !== STATUS_OK || !data.response) {
                    onReady(data)

                    return
                }

                const filteredItems = data.response.filter((item) => {
                    // Return true if filtered item has own property that names ${key}
                    return {}.hasOwnProperty.call(item, key) &&
                        // and value of the property is listed in ${itemIds} array
                        itemIds.indexOf(item[key]) !== -1
                })

                onReady(Object.assign(
                    data,
                    {
                        response: filteredItems,
                        responseText: JSON.stringify(filteredItems),
                    }
                ))

                return
            })
        } else {
            onReady(null)
        }
    }
    static buildResponseObject(data) {
        if (data) {
            return data
        }

        return {
            status: STATUS_ERROR,
            response: null,
            responseText: '',
            statusCode: 400,
        }
    }
    static injectRelations(baseCollection, relatedCollection, mappingKey, elementMappingKey) {
        const resultCollection = []

        baseCollection.forEach((baseCollectionItem) => {
            const foundItems = []

            if (!{}.hasOwnProperty.call(baseCollectionItem, mappingKey)) {
                return
            }

            baseCollectionItem[mappingKey].forEach((targetItem) => {
                let foundItem = null

                relatedCollection.forEach((relatedCollectionItem) => {
                    if (typeof targetItem === 'object') {
                        if (
                            relatedCollectionItem[elementMappingKey] ===
                                targetItem[elementMappingKey]
                        ) {
                            foundItem = Object.assign(targetItem, relatedCollectionItem)
                        }
                    } else if (relatedCollectionItem[elementMappingKey] === targetItem) {
                        foundItem = relatedCollectionItem
                    }
                })

                if (!foundItem) {
                    return
                }

                foundItems.push(foundItem)
            })

            const mappingObject = {}
            mappingObject[mappingKey] = foundItems

            resultCollection.push(Object.assign(
                baseCollectionItem,
                mappingObject
            ))

            return
        })

        return resultCollection
    }
    static collectUniqueItemsFromCollectionProperty(collection, key) {
        const uniqueList = []

        collection.forEach((item) => {
            if ({}.hasOwnProperty.call(item, key)) {
                item[key].forEach((itemElement) => {
                    if (uniqueList.indexOf(itemElement) === -1) {
                        uniqueList.push(itemElement)
                    }
                })
            }
        })

        return uniqueList
    }
}

export default DataProvider

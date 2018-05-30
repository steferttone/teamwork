const getItemById = (collection, targetId) => {
    if (!collection || collection.length === 0) {
        return null
    }

    const result = collection.filter((collectionItem) => {
        return {}.hasOwnProperty.call(collectionItem, 'id') &&
            collectionItem.id === targetId
    })

    return result.length === 1
        ? result[0]
        : null
}

export default {}

export { getItemById }

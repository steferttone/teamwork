import DataProvider from 'helpers/data-providers/DataProvider'

const JSON_URL = 'activities.json'
const NAME_KEY = 'name'
const DISPLAY_NAME_KEY = 'displayName'
const CATEGORY_KEY = 'category'
const PRIMARY_KEY = NAME_KEY

class ActivityDataProvider extends DataProvider {
    constructor(dispatch) {
        super(JSON_URL, dispatch)
    }
    getItemsByPrimaryKey(itemIds, onReady) {
        super.getItemsByKey(PRIMARY_KEY, itemIds, onReady)
    }
    getItemsByName(itemIds, onReady) {
        super.getItemsByKey(NAME_KEY, itemIds, onReady)
    }
    getItemsByDisplayName(itemIds, onReady) {
        super.getItemsByKey(DISPLAY_NAME_KEY, itemIds, onReady)
    }
    getItemsByCategory(itemIds, onReady) {
        super.getItemsByKey(CATEGORY_KEY, itemIds, onReady)
    }
}

export default ActivityDataProvider

export { PRIMARY_KEY }

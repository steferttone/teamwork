// Importing hash history
import { hashHistory } from 'react-router'

const redirectToContactsPage = (destination) => {
    const pagePath = '/contacts'
    hashHistory.push({
        pathname: `${pagePath}/${destination}`,
    })
}

const redirectAction = (pageAlias, dataObject) => {
    return () => {
        switch (pageAlias) {
        case 'contacts':
            redirectToContactsPage(dataObject)
            break
        default:
            break
        }
    }
}

export default {}

export { redirectAction }

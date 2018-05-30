/* global env */

import endpointsMap from 'endpointsMap.json'

const getEndpoint = (service, environment) => {
    let usedEnv = environment

    if (usedEnv === undefined || usedEnv === null) {
        usedEnv = env || 'development'
    }

    if ({}.hasOwnProperty.call(endpointsMap, service)) {
        if ({}.hasOwnProperty.call(endpointsMap[service], usedEnv)) {
            return {
                method: endpointsMap[service].method,
                url: endpointsMap[service][usedEnv],
            }
        }
    }

    return null
}

export default getEndpoint

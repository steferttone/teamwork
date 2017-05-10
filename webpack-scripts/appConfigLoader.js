'use strict'

const uiSettings = require('../settings.json')

const getApplicationsList = () => {
    return Object.keys(uiSettings.applications || []).map((index) => {
        return uiSettings.applications[index].name
    })
}

const getEntryPoints = (props) => {
    const entryPoints = {}

    if (props && props.hasOwnProperty('select')) {
        props.select.forEach((entryPoint) => {
            const foundEntryPoint = uiSettings.applications.filter((application) => {
                return application.name === entryPoint
            })

            if (foundEntryPoint && foundEntryPoint[0] !== undefined) {
                entryPoints[foundEntryPoint[0].name] = foundEntryPoint[0].path
                entryPoints[`vendor-${foundEntryPoint[0].name}`] = foundEntryPoint[0].vendor
            }
        })
    }

    return entryPoints
}

const getEntryAliases = (props) => {
    const alias = {}

    if (props && props.hasOwnProperty('select')) {
        props.select.forEach((entryPoint) => {
            const foundEntryPoint = uiSettings.applications.filter((application) => {
                return application.name === entryPoint
            })

            if (foundEntryPoint && foundEntryPoint[0] !== undefined) {
                if (!foundEntryPoint[0].alias) {
                    return
                }

                Object.keys(foundEntryPoint[0].alias).forEach((foundAlias) => {
                    alias[foundAlias] = foundEntryPoint[0].alias[foundAlias]
                })
            }
        })
    }

    return alias
}

const getCommonBundleNames = (props) => {
    let commonBundleNames = []

    if (props && props.hasOwnProperty('select')) {
        props.select.forEach((entryPoint) => {
            commonBundleNames.push(entryPoint)
            commonBundleNames.push(`vendor-${entryPoint}`)
        })
    }

    return commonBundleNames
}

const getCommonBundleTargetName = (props) => {
    let targetName = 'common.js'

    if (props && props.hasOwnProperty('select')) {
        if (props.select.length > 0) {
            targetName = `vendor-${props.select[0]}.bundle.js`
        }
    }

    return targetName
}

module.exports = {
    getEntryPoints: getEntryPoints,
    getEntryAliases: getEntryAliases,
    getCommonBundleNames: getCommonBundleNames,
    getCommonBundleTargetName: getCommonBundleTargetName,
    getApplicationsList: getApplicationsList,
}

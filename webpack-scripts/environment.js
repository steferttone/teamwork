'use strict'

const DEV_ENV = 'development'
const DEV_SHORT_ENV = 'dev'
const LOCAL_DEV_ENV = 'localdev'
const PROD_ENV = 'production'
const PROD_SHORT_ENV = 'prod'
const QA_ENV = 'qa'
const QA2_ENV = 'qa2'
const STAGE_ENV = 'stage'

const getEnvironmentArgument = () => {
    console.log(process.env.NODE_ENV)
    console.log(process.env.npm_config_env)
    console.log(Object.keys(process.env))
    if (
        process.env.hasOwnProperty('NODE_ENV')
        && process.env.NODE_ENV !== 'undefined'
    ) {
        return process.env.NODE_ENV
    }

    if (process.env.hasOwnProperty('npm_config_env')) {
        return process.env.npm_config_env
    }

    return null
}

const getEnvironment = () => {
    const envArgument = getEnvironmentArgument() || DEV_SHORT_ENV

    switch (envArgument) {
    case DEV_ENV:
    case DEV_SHORT_ENV:
        return DEV_SHORT_ENV
    case PROD_ENV:
    case PROD_SHORT_ENV:
        return PROD_ENV
    default:
        return DEV_SHORT_ENV
    }
}

const getFwdRulesEnvironment = () => {
    if (process.env.hasOwnProperty('npm_config_fwd_type')) {
        return process.env.npm_config_fwd_type
    }
    return DEV_SHORT_ENV
}

const getEnvironmentAlias = (environmentName) => {
    switch (environmentName) {
    case DEV_ENV:
    case DEV_SHORT_ENV:
        return DEV_SHORT_ENV
    case LOCAL_DEV_ENV:
        return LOCAL_DEV_ENV
    case PROD_ENV:
    case PROD_SHORT_ENV:
        return PROD_SHORT_ENV
    case QA_ENV:
        return QA_ENV
    case QA2_ENV:
        return QA2_ENV
    case STAGE_ENV:
        return STAGE_ENV
    default:
        return LOCAL_DEV_ENV
    }
}

const getEnvironmentDescription = (environmentName) => {
    switch (environmentName) {
    case DEV_ENV:
    case DEV_SHORT_ENV:
        return 'Development server'
    case LOCAL_DEV_ENV:
        return 'Developers local machine'
    case PROD_ENV:
    case PROD_SHORT_ENV:
        return 'Production server'
    case QA_ENV:
        return 'QA server'
    case QA2_ENV:
            return 'QA2 server'
    case STAGE_ENV:
        return 'Staging server, pre-production environment'
    }
}

module.exports = {
    constants: {
        DEV_ENV: DEV_ENV,
        DEV_SHORT_ENV: DEV_SHORT_ENV,
        LOCAL_DEV_ENV: LOCAL_DEV_ENV,
        PROD_ENV: PROD_ENV,
        PROD_SHORT_ENV: PROD_SHORT_ENV,
        QA_ENV: QA_ENV,
        QA2_ENV: QA2_ENV,
        STAGE_ENV: STAGE_ENV,
    },
    getEnvironment: getEnvironment,
    getEnvironmentAlias: getEnvironmentAlias,
    getEnvironmentDescription: getEnvironmentDescription,
    getFwdRulesEnvironment: getFwdRulesEnvironment,
}

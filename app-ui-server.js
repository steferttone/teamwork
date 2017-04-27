/**
 * COPYRIGHT:       Copyright © 2016 Xplorie LLC
 * Warning:         This product is protected by United States and international copyright laws.
 *                  Unauthorized use or duplication of this software, in whole
 *                  or in part, is prohibited.
 */

/**
 * Application imports
 */
'use strict'
const url = require('url')
const proxy = require('proxy-middleware')
const browserSync = require('browser-sync')
const jsonfile = require('jsonfile')
const uiSettings = require('./settings.json')
const appConfigLoader = require('./webpack-scripts/appConfigLoader.js')
const environment = require('./webpack-scripts/environment.js')

const DEV_SERVER_PORT = uiSettings.general.DEV_SERVER_PORT
const FORWARDING_RULES_DEFAULT_PATH = './forwarding-rules.json'

const JSON_DATA_PATH = './json-data'
const FONTS_PATH = './fonts'

const args = process.argv

/**
 * Returns JSON path for overriding forwarding rules
 *
 * @return {String || null} [description]
 */
const getFwdRulesOverridePath = () => {
    let found = null

    args.forEach((arg) => {
        const list = arg.match(/--fwd-rules-path=(.+\.json)/i)

        if (list !== null && list.length > 0) {
            found = list[1]
        }
    })

    if (found === null && process.env.hasOwnProperty('npm_config_fwd_rules_path')) {
        found = process.env.npm_config_fwd_rules_path
    }

    return found
}

/**
 * Returns target application name.
 * The function checks CLI argument --build-app=%NAME% and catches %NAME% of app
 *
 * @return {String || null}
 */
const getTargetApplication = () => {
    const appsList = appConfigLoader.getApplicationsList()
    let targetApp = ''

    args.forEach((arg) => {
        const list = arg.match(/--build-app=(.+)/i)

        if (list !== null && list.length > 0) {
            targetApp = list[1]
        }
    })

    if (appsList.indexOf(targetApp) !== -1) {
        return targetApp
    }

    if (process.env.hasOwnProperty('npm_config_build_app')) {
        if (appsList.indexOf(process.env.npm_config_build_app) !== -1) {

            return process.env.npm_config_build_app
        }
    }

    return null
}

/**
 * Implements webserver instance based on BrowserSync
 */
class AppUIServer {
    /**
     * Implements constructor of AppUIServer
     */
    constructor() {
        this.appServer = browserSync.create()
        this.proxies = []
    }
    /**
     * Loads proxies from rules argument
     *
     * @param  {Array}    rules         Rules object from JSON file
     * @return {Array || undefined}
     */
    loadProxies(rules) {
        if (!rules || (rules && rules.length === 0)) {
            return []
        }

        var self = this

        const targetEnv = environment.getEnvironment()
        const targetEnvAlias = environment.getEnvironmentAlias(targetEnv)
        const targetEnvDetails = environment.getEnvironmentDescription(targetEnv)

        console.log(
            'Working with ' + 
            targetEnv + 
            ', used only for ' + 
            targetEnvDetails + 
            ' environment...'
        )

        Object.keys(rules).forEach(function (proxyRoute, index) {
            var appProxy = url.parse(rules[proxyRoute][targetEnvAlias])

            appProxy.route = proxyRoute

            self.proxies.push(proxy(appProxy))
        })
    }
    /**
     * Implements callback for running webserver
     *
     * @return {undefined}
     */
    onStartServer() {
        const targetApp = getTargetApplication()

        // Do not run if application name is wrong
        if (targetApp === null) {
            console.log('The webserver could not be started. You have not selected application!')
            console.log('Select target app with argument "--build-app=application-name"')

            return
        }

        var appServerSettings = {
            server: `./${targetApp}`,
            port: DEV_SERVER_PORT,
            middleware: this.proxies,
            serveStatic: [ './', FONTS_PATH, JSON_DATA_PATH ],
        }

        this.appServer.init(appServerSettings)
    }
    /**
     * Implements callback for handing loading from JSON
     *
     * @param  {Object} data            Data of JSON file
     * @return {undefined || false}
     */
    onSettingsLoad(data) {
        this.loadProxies(data || {})

        this.onStartServer()
    }
    /**
     * Checks is JSON valid and response is success
     *
     * @param  {Object}  error [description]
     * @param  {Object}  data  [description]
     * @return {boolean}       [description]
     */
    isFwdRulesSettingsValid(error, data) {
        if (
            error !== null ||
            (data !== null && !data.hasOwnProperty('rules'))
        ) {
            console.err('Could not parse forwarding rules, terminating server', error)
            console.log('Please make sure that "forwarding-rules.json" exists in root of app-ui')

            return false
        }

        return true
    }
    /**
     * Runs webserver
     *
     * @return {undefined}
     */
    runServer() {
        const ovdPath = getFwdRulesOverridePath()

        var jsonPromise = new Promise((resolve, reject) => {
            return jsonfile.readFile(
                FORWARDING_RULES_DEFAULT_PATH,
                this.onReadDefaultConfig.bind(this, resolve, reject)
            )
        })

        jsonPromise.then((config) => {
            const resultRules = this.mergeRules(
                config.baseConfig
                    ? config.baseConfig.rules
                    : {},
                config.overridedConfig
                    ? config.overridedConfig.rules
                    : {}
            )
            this.onSettingsLoad(resultRules)

            return
        })
        .catch((errorObject) => {
            console.error('Could not load forwarding rules, see details below:')

            if (errorObject.error) {
                console.log(errorObject.error.toString())
            } else {
                console.log('Unknown error', errorObject)
            }
        })
    }
    /**
     * Callback for processing default forwarding rules and
     * sending promise to read settings from CLi arguments
     *
     * @param  {function} resolve   Callback for resolving promise step
     * @param  {function} reject    Callback for rejecting promise step
     * @param  {Object} error       Data-object with error description
     * @param  {Object} data        Data-object with JSON
     * @return {Promise}
     */
    onReadDefaultConfig(resolve, reject, error, data) {
        if (error) {
            return reject({
                type: 'default',
                data,
                error,
            })
        }

        const ovdPath = getFwdRulesOverridePath()

        if (ovdPath !== null) {
            return jsonfile.readFile(
                ovdPath,
                this.onReadOvdConfig.bind(this, resolve, reject, data)
            )
        }

        return resolve({
            baseConfig: data,
            overridedConfig: null,
        })
    }
    /**
     * Callback from processing custom forwarding rules
     *
     * @param  {function} resolve       Callback for resolving promise step
     * @param  {function} reject        Callback for rejecting promise step
     * @param  {Object} defaultData     Data-object with JSON of default forwarding rules
     * @param  {Object} error           Data-object with error description
     * @param  {Object} data            Data-object with JSON
     * @return {Promise}
     */
    onReadOvdConfig(resolve, reject, defaultData, error, data) {
        if (error) {
            return reject({
                type: 'override',
                data,
                error,
            })
        }

        return resolve({
            baseConfig: defaultData,
            overridedConfig: data,
        })
    }
    /**
     * Merges rules settings
     *
     * @param  {Object} defaultRules   First-priority Data-object for merging
     * @param  {Object} overridedRules Last-priority Data-object for merging
     * @return {Object}
     */
    mergeRules(defaultRules, overridedRules) {
        return Object.assign(
            {},
            defaultRules,
            overridedRules
        )
    }
}

const server = new AppUIServer()

server.runServer()

/* global env, envList */
const enable =
    env === envList.DEV_ENV
    || env === envList.DEV_SHORT_ENV
    || env === envList.LOCAL_DEV_ENV
    || env === envList.QA_ENV
    || env === envList.QA2_ENV
/* eslint-disable no-console */

/* eslint-enable no-console */
const log = (...args) => {
    if (!enable) {
        return
    }
    /* eslint-disable no-console */
    console.log(...args)
    /* eslint-enable no-console */
}

const warning = (...args) => {
    if (!enable) {
        return
    }
    /* eslint-disable no-console */
    console.warn(...args)
    /* eslint-enable no-console */
}

const error = (...args) => {
    if (!enable) {
        return
    }
    /* eslint-disable no-console */
    console.error(...args)
    /* eslint-enable no-console */
}

const trace = (...args) => {
    if (!enable) {
        return
    }
    /* eslint-disable no-console */
    console.trace(...args)
    /* eslint-enable no-console */
}

const alert = (...args) => {
    if (!enable) {
        return
    }
    /* eslint-disable no-console */
    alert(...args)
    /* eslint-enable no-console */
}

const debug = {
    log,
    warning,
    error,
    alert,
    trace,
}

export default debug

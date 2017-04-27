const localStorageLoad = (store) => {
    return (next) => {
        return (action) => {
            const type = action && {}.hasOwnProperty.call(action, 'type')
                ? action.type
                : undefined

            if (type === 'STORE_INIT') {
                try {
                    const storedState = JSON.parse(localStorage.getItem('XPL_BOOKING_APPLICATION'))

                    if (storedState) {
                        store.dispatch({
                            type: 'RESET_STATE',
                            payload: storedState,
                        })
                    }

                    return
                } catch (exception) {
                    store.dispatch({
                        type: 'RESET_STATE_EXCEPTION',
                        exception,
                    })
                }
            }

            next(action)
        }
    }
}

export default localStorageLoad

const localStorageDump = (store) => {
    return (next) => {
        return (action) => {
            const state = store.getState()

            localStorage.setItem('XPL_BOOKING_APPLICATION', JSON.stringify(state))

            if (action) {
                next(action)
            }
        }
    }
}

export default localStorageDump

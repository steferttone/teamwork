const GOOGLE_MAPS_LIBRARY_URL = 'https://maps.googleapis.com/maps/api/js'
const GOOGLE_MAPS_API_KEY = 'AIzaSyBTbPbg8yFaTqQRuOBdVo9PAR5lj5DUaoQ'

let isGoogleMapsLibraryLoaded = false

const loadExternalLibrary = (src, onReady) => {
    const script = document.createElement('script')

    if (script.readyState) {
        // IE compatibility
        script.onreadystatechange = () => {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
                script.onreadystatechange = null
                isGoogleMapsLibraryLoaded = true

                onReady()
            }
        }
    } else {
        script.onload = () => {
            isGoogleMapsLibraryLoaded = true

            onReady()
        }
    }

    script.setAttribute('src', src)
    script.setAttribute('type', 'text/javascript')

    document.getElementsByTagName('head')[0].appendChild(script)
}

const getGoogleMapsLibrary = (librariesCollection, onReady) => {
    if (isGoogleMapsLibraryLoaded) {
        onReady()

        return
    }

    const src = GOOGLE_MAPS_LIBRARY_URL
        .concat(`?key=${GOOGLE_MAPS_API_KEY}`)
        .concat('&')
        .concat(`libraries=${librariesCollection.join(',')}`)

    loadExternalLibrary(src, onReady)
}

export default {}

export {
    loadExternalLibrary,
    getGoogleMapsLibrary,
}

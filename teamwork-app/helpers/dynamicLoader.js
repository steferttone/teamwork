const loadScript = (props) => {
    const {
        async,
        url,
        charset,
        onReady,
        onError,
    } = props

    if (url.length === 0) {
        return
    }

    const node = document.createElement('script')

    node.src = url
    node.type = 'text/javascript'
    node.async = !!async
    node.charset = charset || 'utf-8'

    if (onReady) {
        node.onload = onReady
    }

    if (onError) {
        node.onerror = onError
    }

    document.getElementsByTagName('head')[0].appendChild(node)
}

export default {}

export { loadScript }

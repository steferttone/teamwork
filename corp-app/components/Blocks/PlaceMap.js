import React, { Component } from 'react'

const IMAGE_URL = "img/map.jpg"
const IMAGE_ALT = "Карта"

class PlaceMap extends Component {
    render() {        
        return ( 
            <img src={ IMAGE_URL } alt={ IMAGE_ALT }/>
        )
    }
}

export default PlaceMap
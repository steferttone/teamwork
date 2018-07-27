import React, { Component } from 'react'

import MapBlock from 'components/Blocks/MapBlock'

const mapOptions = {
    mapPosition: [55.751574, 37.711856],
    zoom: 12,
}
const places = [
    {
        coordinates: [55.751574, 37.549856],
        hintContent: 'Lordi',
        balloonContent: 'content i',
    },
    {
        coordinates: [55.751574, 37.611856],
        hintContent: 'Lordi 1',
        balloonContent: 'content 1',
    },
    {
        coordinates: [55.751574, 37.717856],
        hintContent: 'Lordi 2',
        balloonContent: 'content 2',
    },
    {
        coordinates: [55.751574, 37.814856],
        hintContent: 'Lordi 3',
        balloonContent: 'content 3',
    }
]

class PlaceMap extends Component {
    render() {        
        return ( 
            <div className="toByMap">
                <MapBlock
                    mapOptions = { mapOptions }
                    places = { places }
                />
            </div>
        )
    }
}

export default PlaceMap
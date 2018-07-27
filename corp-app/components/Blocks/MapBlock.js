import React, { Component } from 'react'

import { YMaps, Map, Placemark } from 'react-yandex-maps';

class MapBlock extends Component {
    render() {
        const { mapOptions, places } = this.props

        const mapState = { 
            center: mapOptions.mapPosition, 
            zoom: mapOptions.zoom !== undefined
                ? mapOptions.zoom
                : 13,
            controls: mapOptions.controls !== undefined
                ? mapOptions.controls
                : []
        }
        const defaultHintContent = 'Lordi'
        const defaultBalloonContent = '<div style="padding: 20px;"><p>Метка</p></div>'
        const defaultPointer = 'img/pointer.png'
        const defaultPointerSize = [42, 60]
        const defaultPointerOffset =  [-21, -60]
        
        return (  
            <div className="mapBlock" style={{ backgroundImage: `url()` }}>
                <YMaps>
                    <Map state={mapState}>
                        {
                            places.map(
                                (item, key) => {
                                    return (
                                        <Placemark
                                            key = { key }
                                            geometry={{
                                                coordinates: item.coordinates,
                                            }}
                                            properties={{
                                                hintContent: item.hintContent !== undefined
                                                    ? item.hintContent
                                                    : defaultHintContent,
                                                balloonContent: item.balloonContent !== undefined
                                                    ? '<div style="padding: 20px;"><p>'+item.balloonContent+'</p></div>'
                                                    : defaultBalloonContent,
                                                hideicon: false,
                                            }}
                                            options={{
                                                iconLayout: 'default#image',
                                                iconImageHref: item.pointer !== undefined
                                                    ? item.pointer
                                                    : defaultPointer,
                                                iconImageSize: item.pointerSize !== undefined
                                                    ? item.pointerSize
                                                    : defaultPointerSize,
                                                iconImageOffset: item.pointerOffset !== undefined
                                                    ? item.pointerOffset
                                                    : defaultPointerOffset,
                                            }}
                                        />  

                                    )
                                }
                            )
                        }              
                    </Map>
                </YMaps>                  
            </div>         
        )
    }
}

export default MapBlock
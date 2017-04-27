import React, { Component } from 'react'

const OUR_CONTACTS_BUTTON = 'Наши контакты'

class PlacesBlock extends Component {
    componentDidMount() {
        const { places, onGetPlaces } = this.props

        if (places.dataState === 'STATE_NOT_REQUESTED') {
            onGetPlaces()
        }
    }
    render() {
        const { places } = this.props

        if (places.dataState !== 'STATE_READY') {
            return null
        }

        return (
            <section className="places">
                <div className="container">
                    <div className=" hideXS grid">
                        {
                            places.data.map(
                                (place, key) => {
                                    return PlacesBlock.renderPlace(place, key)
                                }
                            )
                        }
                    </div>
                </div>
                <a href="#" className="showXS yellowBth">{ OUR_CONTACTS_BUTTON }</a>
            </section>
        )
    }
    static renderPlace(place, key) {
        return (
            <div className="item col3" key={ key }>
                <div
                    className={
                        [
                            'country',
                            'arrAnim',
                            'table',
                            place.className,
                        ].join(' ')
                    }
                    style={ { backgroundImage: `url(${place.image})` } }
                >
                    <div className="tCell middle">
                        <a
                            className="invisTextA"
                            href={ place.link }
                        >
                            { place.title }
                        </a>
                        <div className="data">
                            <span className="countryName">
                                { place.country }
                            </span>
                            <span className="cityName">
                                { place.city }
                            </span>
                            <span className="marker"></span>
                            <div className="figure"></div>
                            <span className="icon-arr-right"></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlacesBlock

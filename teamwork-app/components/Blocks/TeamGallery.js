import React, { Component } from 'react'

import Slider from 'react-slick'

const settings = {
    className: 'slider',
    centerMode: true,
    slidesToShow: 5,
    swipeToSlide: true,
    // infinite: false,
    arrows: false,
    centerPadding: '0px',
    focusOnSelect: true,
    slidesPerRow: 3,
    speed: 500,
    responsive: [
        {
            breakpoint: 1439,
            settings: {
                slidesToShow: 5,
            },
        },
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                centerPadding: '60px',
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 660,
            settings: {
                slidesToShow: 1,
                adaptiveHeight: true,
            },
        },
    ],
}

class TeamGallery extends Component {
    componentDidMount() {
        const { team, onGetTeam } = this.props

        if (team.dataState === 'STATE_NOT_REQUESTED') {
            onGetTeam()
        }
    }
    render() {
        const { teamTitle, teamDescription, team } = this.props

        if (team.dataState !== 'STATE_READY') {
            return null
        }

        return (
            <section className="team">
                <div className="container">
                    <h2>{ teamTitle }</h2>
                    <div className="singleColText center centerBl col4 col6-sd col8-md col12-sm">
                        <p>{ teamDescription }</p>
                    </div>
                    <Slider
                        { ...settings }
                    >
                        {
                            this.renderSlides()
                        }
                    </Slider>
                </div>
            </section>
        )
    }
    renderSlides() {
        const { team } = this.props

        return team.data.map(
            (person, key) => {
                return (
                    <div className="item" key={ key }>
                        <div className="in">
                            <div className="image">
                                <div className="img" style={ { backgroundImage: `url(${person.img})` } }></div>
                                <img src={ person.img } alt=""/>
                            </div>
                            <div className="data">
                                <h3>{ person.name }</h3>
                                <span>{ person.position }</span>
                            </div>
                        </div>
                    </div>
                )
            }
        )
    }
}

export default TeamGallery

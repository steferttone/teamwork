import React, { Component } from 'react'

import { Link } from 'react-router'

const BLOCK_TITLE = "Фирменные магазины"

class ShopsPlaces extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            shopsPlaces: []
        }
    }
    componentWillMount() {
        const { onGetShopsPlaces } = this.props
        // if (this.state.shopsPlaces === undefined)
        onGetShopsPlaces()
    }
    componentWillReceiveProps(nextProps) {
        const { dataState, data } = nextProps.shopsPlaces
        if (dataState === 'STATE_READY') {
            this.setState(
                {
                    shopsPlaces: data
                }
            )
        }
    }

    render() {
        const { dataState } = this.props.shopsPlaces
        if (dataState !== 'STATE_READY') {
            return null
        }
        const { shopsPlaces } = this.state

        return (   
            <div className="shopItem">
                <h2 className="capTwo">{ BLOCK_TITLE }</h2>
                <div className="buyBlockList">     
                    {
                        shopsPlaces.map(
                            (item, key) => {
                                return (
                                    <div key={ key } className="buyBlockline">
                                        <div className="textBlock">
                                            <span className="name">{ item.title }</span>      
                                            <p>{ item.address }</p> 
                                            { 
                                                item.phones.map(
                                                    (inItem, inKey) => {
                                                        return <p key={ inKey }>тел. <Link 
                                                                                        to={ `+`+inItem.replace(/-/g,"") }
                                                                                        className="telLink"
                                                                                    >
                                                                                        { inItem }
                                                                                    </Link></p> 
                                                    }
                                                )
                                            }
                                        </div>
                                        <div className="mediaListGallery">
                                            {
                                                item.images.map(
                                                    (inItem, inKey) => {
                                                        return <div key={ inKey } className="mediaBlock" style={{ backgroundImage: `url(${ inItem })` }}></div>
                                                    }
                                                )
                                            }
                                        </div> 
                                    </div> 
                                )
                            }
                        )
                    }                                       
                </div>
            </div>            
        )
    }
}

export default ShopsPlaces
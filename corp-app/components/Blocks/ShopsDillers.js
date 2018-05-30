import React, { Component } from 'react'

// import { Link } from 'react-router'

const BLOCK_TITLE = "Диллерская сеть"

class ShopsDillers extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            shopsDillers: []
        }
    }
    componentWillMount() {
        const { onGetShopsDillers } = this.props
        // if (this.state.shopsDillers === undefined)
        onGetShopsDillers()
    }
    componentWillReceiveProps(nextProps) {
        const { dataState, data } = nextProps.shopsDillers
        if (dataState === 'STATE_READY') {
            this.setState(
                {
                    shopsDillers: data
                }
            )
        }
    }

    render() {
        const { dataState } = this.props.shopsDillers
        if (dataState !== 'STATE_READY') {
            return null
        }
        const { shopsDillers } = this.state
        const dillersList = shopsDillers.data
        
        return (  
            <div className="shopItem">
                <h2 className="capTwo">{ BLOCK_TITLE }</h2>
                <div className="textBlockList">
                    {
                        shopsDillers.map(
                            (item, key) => {
                                return (
                                    <div key={ key } className="item">
                                        <div className="textBlock">
                                            <p><b>{ item.place }</b></p>
                                            {
                                                item.addresses.map(
                                                    (inItem, inKey) => {
                                                        return <p key={ inKey }>-{ inItem.title }<br/> ({ inItem.address })</p>
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

export default ShopsDillers
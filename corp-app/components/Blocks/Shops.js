import React, { Component } from 'react'

import ShopsPlaces from 'containers/ShopsPlacesConnect'
import ShopsDillers from 'containers/ShopsDillersConnect'

class Shops extends Component {
    render() {        
        return ( 
            <div className="item">              
                <ShopsPlaces/>
                <ShopsDillers/>
            </div>
        )
    }
}

export default Shops
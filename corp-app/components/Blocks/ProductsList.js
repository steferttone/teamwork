import React, { Component } from 'react'

import { Link } from 'react-router'

import CatalogProducts from 'containers/CatalogProductsConnect'

const TO_HOME_PAGE = "Главная"
const PAGE_TITLE = "Каталог"

class ProductsList extends Component {
    render() {     
        const { params, activeItem } = this.props


        const catalogBread =  activeItem.title 
            ?   <li className="breadCrumbs-item">
                    <Link
                        to="/catalog" 
                        className="singleLink"
                    >
                        { PAGE_TITLE }
                    </Link>
                </li>
            :   <li className="breadCrumbs-item">
                    <span className="txt">{ PAGE_TITLE }</span>
                </li>

            const lastBread =  activeItem.title 
            ?   <li className="breadCrumbs-item">
                    <span className="txt">{ activeItem.title }</span>
                </li>
            : ''

        return(
            <div className="page-right">          
                <div className="page-title"> 
                    <ul className="breadCrumbs">
                        <li className="breadCrumbs-item">
                            <Link
                                to="/" 
                                className="singleLink"
                            >
                                { TO_HOME_PAGE }
                            </Link>
                        </li>
                        { catalogBread }
                        { lastBread }
                    </ul> 
                    <h2 className="capTwo">{ activeItem.title }</h2>
                </div> 
                <CatalogProducts params={ params } />
            </div>
        )
    }
}

export default ProductsList

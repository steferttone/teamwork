import React, { Component } from 'react'

import { Link } from 'react-router'

import CatalogProducts from 'containers/CatalogProductsConnect'

const TO_HOME_PAGE = "Главная"

class ProductItem extends Component {
    render() {     
        const { params, activeItem } = this.props

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
                        <li className="breadCrumbs-item">
                            <span className="txt">Комплекты штор</span>
                        </li>
                    </ul> 
                    <h2 className="capTwo">{ activeItem.title }</h2>
                </div> 
                <CatalogProducts params={ params } />
                
                <div className="pagination pagination_right">
                    <ul className="pag-list">
                        <li className="pag-item">
                            <a href="#" className="iconFont icon-i_arr-left singleLink"></a>
                        </li>
                        <li className="pag-item">
                            <a href="#" className="singleLink">1</a>
                        </li>
                        <li className="pag-item">
                            <span className="txt">...</span>
                        </li>
                        <li className="pag-item">
                            <a href="#" className="singleLink active">5</a>
                        </li>
                        <li className="pag-item">
                            <span className="txt">...</span>
                        </li>
                        <li className="pag-item">
                            <a href="#" className="singleLink">21</a>
                        </li>
                        <li className="pag-item">
                            <a href="#" className="iconFont  icon-i_arr-right singleLink"></a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ProductItem

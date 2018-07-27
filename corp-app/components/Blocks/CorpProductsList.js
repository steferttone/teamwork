import React, { Component } from 'react'

import { Link } from 'react-router'

import BannerBlock from 'components/Blocks/BannerBlock'
import CorpProducts from 'containers/CorpProductsConnect'

const TO_HOME_PAGE = "Главная"
const PAGE_TITLE = "Каталог"

class CorpProductsList extends Component {
    render() {     
        const { params, activeItem } = this.props


        const corpBread =  activeItem.title 
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
                <BannerBlock/>
                <CorpProducts params={ params } />
            </div>
        )
    }
}

export default CorpProductsList

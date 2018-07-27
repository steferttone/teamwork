import React, { Component } from 'react'

import { Link } from 'react-router'
import ProductMedia from 'components/Blocks/ProductMedia'

const TO_HOME_PAGE = "Главная"
const TO_CATALOG_PAGE = "Каталог"
const SHARE = "Поделиться"

class ProductItem extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            product: []
        }
    }
    componentWillMount() {
        const { onGetProduct } = this.props
        onGetProduct()
    }
    componentWillReceiveProps(nextProps) {
        const { dataState, data } = nextProps.product
        const { params } = this.props
        const { prodId } = params

        if (dataState === 'STATE_READY') {
            this.setState(
                {
                    product: data.filter(item => `prod-`+item.id == prodId)
                }
            )
        }
    }
    render() {
        const { dataState } = this.props.product
        if (dataState !== 'STATE_READY') {
            return null
        }
        const productArray = this.state.product
        const product = productArray.length > 0
        ? productArray[0]
        : null

        const activeItem = this.props.activeItem      

        if (product === null){
            return (
                <p>Произошла ошибка! Тавар не найден... </p>
            )            
        }else{
            const prodImages = Array.isArray(product.image)
            ? product.image
            : new Array(product.image)

            return (       
                <div className="page-right">          
                    <div className="product-full">
                        <ProductMedia 
                            activeImage={ 0 }
                            data={ prodImages }
                        />
                        <div className="product-right">
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
                                        <Link
                                            to={ activeItem.link } 
                                            className="singleLink"
                                        >
                                            { TO_CATALOG_PAGE }
                                        </Link>
                                    </li>
                                    <li className="breadCrumbs-item">
                                        <Link
                                            to={ activeItem.link + "cat-" + activeItem.id }
                                            className="singleLink"
                                        >
                                            { activeItem.title }
                                        </Link>
                                        {/* <a href="#" className="singleLink">Комплекты штор</a> */}
                                    </li>
                                    <li className="breadCrumbs-item">
                                        <span className="txt">{ product.title }</span>
                                    </li> 
                                </ul>
                                <h2 className="capTwo">{ product.title }</h2>
                            </div>
                            <div className="textBlock">
                                    <p><b>Состав:</b> { product.consist }</p>
                                    <p><b>Страна производитель:</b> { product.madeBy }</p>
                                    <p><b>Размер:</b> Высота - { product.sizeY+product.sizeType }, ширина - { product.sizeX+product.sizeType }</p>
                                    <div className="desr">
                                            <p><b>Описание:</b> <br/>{ product.content }</p>
                                    </div>
                                    
                                    <Link 
                                        to="/to-by"
                                        className="iconLink"
                                    >
                                        <span className="iconFont icon-Share iconBg"></span>
                                        <span className="txt">{ SHARE }</span>
                                    </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default ProductItem

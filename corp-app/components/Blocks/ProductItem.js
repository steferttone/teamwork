import React, { Component } from 'react'

import { Link } from 'react-router'

const TO_BY_TITLE = "Где купить"

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
        if (product === null){
            return (
                <p>Произошла ошибка! Тавар не найден... </p>
            )            
        }else{
            return (       
                <div className="page-right">          
                    <div className="product-full">
                        <div className="product-left">
                            <div className="media-full">
                                <div className="mediaBlock" style={{ backgroundImage: `url( ${ product.image })` }}></div>
                            </div>                
                            {/* <div className="mediaListGallery">
                                <div className="mediaBlock" style="background-image: url(img/back.jpg);"></div>
                                <div className="mediaBlock" style="background-image: url(img/back.jpg);"></div>
                                <div className="mediaBlock" style="background-image: url(img/back.jpg);"></div>
                            </div>   */}
                        </div>
                        <div className="product-right">
                            <div className="page-title">
                                {/* <ul className="breadCrumbs">
                                    <li className="breadCrumbs-item">
                                        <a href="#" className="singleLink">Главная</a>
                                    </li>
                                    <li className="breadCrumbs-item">
                                        <a href="#" className="singleLink">Комплекты штор</a>
                                    </li>
                                    <li className="breadCrumbs-item">
                                        <span className="txt">Калифорния 15364С</span>
                                    </li> 
                                </ul> */}
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
                                        <span className="iconFont icon-i_Complex iconBg"></span>
                                        <span className="txt">{ TO_BY_TITLE }</span>
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

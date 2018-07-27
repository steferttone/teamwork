import React, { Component } from 'react'

class BannerBlock extends Component {
    
    render() {        
        return (       
            <div className="banerBell">
                <div className="banerBell-icon" style={{ backgroundImage: `url(img/phone-ban.jpg)` }}>
                        <span className="iconFont icon-i_Map"></span>
                </div>
                <div className="banerBell-text">
                        <span className="big">Закажите звонок специалиста</span>
                        <span className="small">Мы просчитаем Ваш заказ</span>
                </div>
                <div className="banerBell-btn">
                    <button className="btn-fillRound-color1-bg4">Оставьте заявку</button>
                </div>                                    
            </div>
        )
    }
}

export default BannerBlock

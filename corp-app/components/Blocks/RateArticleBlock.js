import React, { Component } from 'react'

class RateArticleBlock extends Component {
    
    render() {
        const { data } = this.props
        const rate = data.rates === undefined
        ? false
        : true

        if (!rate){
            return null
        }
        
        return (   
            <div className="statBlock">
                <div className="statBlockItem">
                    <span className="iconLink">
                        <span className="iconFont icon-eye"></span>
                        <span className="count">{ data.rates.visits }</span>
                    </span>
                </div>   
                <div className="statBlockItem">
                    <span className="iconLink">
                        <span className="iconFont icon-i_Wish"></span>
                        <span className="count">{ data.rates.likes }</span>
                    </span>
                </div>  
                <div className="statBlockItem">
                    <span className="iconLink">
                        <span className="iconFont icon-bubble"></span>
                        <span className="count">{ data.rates.comments }</span>
                    </span>
                </div>  
            </div>
        )

    }
}

export default RateArticleBlock

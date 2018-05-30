import React, { Component } from 'react'

import { Link } from 'react-router'

class QuestRequest extends Component {
    
    render() {
        const { itemKey, data } = this.props
        const key = itemKey != 'undefined'
        ? itemKey
        : ''

        return (    
            <div key={ key } className="textBlock">
                <h3 className="capThree">{ data.quest }</h3>
                <p><b>Ответ:</b> { data.reQuest }</p>
            </div>
        )
    }
}

export default QuestRequest

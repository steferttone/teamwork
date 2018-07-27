import React, { Component } from 'react'

class QuestRequest extends Component {
    
    render() {
        const { data } = this.props

        return (    
            <div className="textBlock">
                <h3 className="capThree">{ data.quest }</h3>
                <p><b>Ответ:</b> { data.reQuest }</p>
            </div>
        )
    }
}

export default QuestRequest

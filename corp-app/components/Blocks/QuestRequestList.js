import React, { Component } from 'react'

import QuestRequest from 'components/Blocks/QuestRequest'

class QuestRequestList extends Component {
    
    render() {
        const { data } = this.props

        return (                
            <div className="questsList">
                {
                    data.map(
                        (item, key) => {
                            return(
                                <QuestRequest
                                    key={ key }
                                    data={ item }
                                />
                            )
                        }
                    )
                }
            </div>
        )
    }
}

export default QuestRequestList

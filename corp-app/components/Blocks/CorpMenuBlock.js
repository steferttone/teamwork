import React, { Component } from 'react'

import CatalogMenuLinks from "components/Blocks/CatalogMenuLinks"

class CorpMenuBlock extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            corpMenuBlock: []
        }
    }
    componentWillMount() {
        const { onGetCorpMenuList } = this.props
        onGetCorpMenuList()
    }
    componentWillReceiveProps(nextProps) {
        const { dataState, data } = nextProps.corpMenuBlock
        if (dataState === 'STATE_READY') {
            this.setState(
                {
                    corpMenuBlock: data
                }
            )
        }
    }

    render() {
        const { dataState } = this.props.corpMenuBlock
        
        if (dataState !== 'STATE_READY') 
            return null
        
        const { corpMenuBlock } = this.state
        const data = corpMenuBlock[0]
        
        if (data === undefined)
            return null
        
        const { activeItem } = this.props

        return (   
            <div className="item">
                <span className="catalogBlock-title">{ data.title }</span>
                <CatalogMenuLinks  
                    listItems={ data.data } 
                    itemStyle={ {
                        type: "vert",
                        isRadius: true,
                    } }
                    activeItem={ activeItem }
                />
            </div>
        )
    }
}

export default CorpMenuBlock
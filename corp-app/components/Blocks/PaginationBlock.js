import React, { Component } from 'react'

import Pagination from "react-js-pagination";

class PaginationBlock extends Component {
    constructor(props) {
        super(props)

        const { context } = this.props       

        context.setState(
            {
                activePage: 1
            }
        )
        this.handlePageChange = this.handlePageChange.bind(context)
    }
    
    handlePageChange(pageNumber) {
        this.setState(
            {
                activePage: pageNumber
            }
        )
    }
    render() {
        const { activePage, itemsCountPerPage, totalItemsCount, pageRangeDisplayed, context } = this.props
        
        const activePageSet = activePage !== undefined 
            ? activePage
            : context.state.activePage
        const itemsCountPerPageSet = itemsCountPerPage !== undefined 
            ? itemsCountPerPage
            : 4
        const pageRangeDisplayedSet = pageRangeDisplayed !== undefined 
            ? pageRangeDisplayed
            : 3
        
        return (  
            <div className="pagination pagination_right">
                <Pagination
                    activePage={ activePageSet }
                    itemsCountPerPage={ itemsCountPerPageSet }
                    totalItemsCount={ totalItemsCount }
                    pageRangeDisplayed={ pageRangeDisplayedSet }
                    onChange={ this.handlePageChange }
                    innerClass="pag-list"
                    itemClass="pag-item"
                    linkClass="singleLink"
                    linkClassFirst="iconFont icon-arrow_2_left"
                    linkClassPrev="iconFont icon-arrow_1_left"
                    linkClassNext="iconFont icon-arrow_1_right"
                    linkClassLast="iconFont icon-arrow_2_right"
                    firstPageText=""
                    prevPageText=""
                    nextPageText=""
                    lastPageText=""
                    activeClass=""
                    activeLinkClass="active"
                />
            </div>
        )

    }
}

export default PaginationBlock

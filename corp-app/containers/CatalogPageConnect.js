import { connect } from 'react-redux'

import { getCatalogMenuList } from 'actions/catalogMenuListActions'

// Component for connecting
import CatalogPageContent from 'components/Blocks/CatalogPageContent'

const mapStateToProps = (state) => {
    return {
        // test: state,
        catalogMenuList: state.catalogMenuList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCatalogMenuList: () => {
            dispatch(
                getCatalogMenuList()
            )
        },
    }
}

const CatalogPageConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(CatalogPageContent)

export default CatalogPageConnect


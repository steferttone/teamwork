import { connect } from 'react-redux'

import { getCatalogMenuList } from 'actions/catalogMenuListActions'

// Component for connecting
import CatalogMenu from 'components/Blocks/CatalogMenu'

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

const CatalogMenuListConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(CatalogMenu)

export default CatalogMenuListConnect


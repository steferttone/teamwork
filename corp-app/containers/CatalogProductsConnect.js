import { connect } from 'react-redux'

import { getCatalogProducts } from 'actions/catalogProductsActions'

// Component for connecting
import CatalogProducts from 'components/Blocks/CatalogProducts'

const mapStateToProps = (state) => {
    return {
        // test: state,
        catalogProducts: state.catalogProducts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCatalogProducts: () => {
            dispatch(
                getCatalogProducts()
            )
        },
    }
}

const CatalogProductsConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(CatalogProducts)

export default CatalogProductsConnect


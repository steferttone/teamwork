import { connect } from 'react-redux'

import { getProduct } from 'actions/productActions'

// Component for connecting
import ProductItem from 'components/Blocks/ProductItem'

const mapStateToProps = (state) => {
    return {
        // test: state,
        product: state.product,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetProduct: () => {
            dispatch(
                getProduct()
            )
        },
    }
}

const ProductConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductItem)

export default ProductConnect


import { connect } from 'react-redux'

import { getCorpProducts } from 'actions/corpProductsActions'

// Component for connecting
import CorpProducts from 'components/Blocks/CorpProducts'

const mapStateToProps = (state) => {
    return {
        // test: state,
        corpProducts: state.corpProducts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCorpProducts: () => {
            dispatch(
                getCorpProducts()
            )
        },
    }
}

const CorpProductsConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(CorpProducts)

export default CorpProductsConnect


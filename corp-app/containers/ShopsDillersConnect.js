import { connect } from 'react-redux'

import { getShopsDillers } from 'actions/shopsDillersActions'

// Component for connecting
import ShopsDillers from 'components/Blocks/ShopsDillers'

const mapStateToProps = (state) => {
    return {
        // test: state,
        shopsDillers: state.shopsDillers,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetShopsDillers: () => {
            dispatch(
                getShopsDillers()
            )
        },
    }
}

const ShopsDillersConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopsDillers)

export default ShopsDillersConnect


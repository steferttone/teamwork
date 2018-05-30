import { connect } from 'react-redux'

import { getShopsPlaces } from 'actions/shopsPlacesActions'

// Component for connecting
import ShopsPlaces from 'components/Blocks/ShopsPlaces'

const mapStateToProps = (state) => {
    return {
        // test: state,
        shopsPlaces: state.shopsPlaces,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetShopsPlaces: () => {
            dispatch(
                getShopsPlaces()
            )
        },
    }
}

const ShopsPlacesConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopsPlaces)

export default ShopsPlacesConnect


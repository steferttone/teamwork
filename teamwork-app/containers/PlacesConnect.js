import { connect } from 'react-redux'

import { getPlacesData } from 'actions/placesActions'

// Component for connecting
import PlacesBlock from 'components/Blocks/PlacesBlock'

const mapStateToProps = (state) => {
    return {
        places: state.places,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetPlaces: () => {
            dispatch(
                getPlacesData()
            )
        },
    }
}

const PlacesBlockConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlacesBlock)

export default PlacesBlockConnect

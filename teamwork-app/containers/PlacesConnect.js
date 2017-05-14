import { connect } from 'react-redux'

import { getPlacesData } from 'actions/placesActions'
import { redirectAction } from 'actions/locationActions'

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
        onRedirectContacts: (destination) => {
            dispatch(
                redirectAction('contacts', destination)
            )
        }
    }
}

const PlacesBlockConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlacesBlock)

export default PlacesBlockConnect

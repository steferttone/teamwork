import { connect } from 'react-redux'

import { getTeamData } from 'actions/teamActions'

// Component for connecting
import TeamGallery from 'components/Blocks/TeamGallery'

const mapStateToProps = (state) => {
    return {
        team: state.team,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetTeam: () => {
            dispatch(
                getTeamData()
            )
        },
    }
}

const TeamGalleryConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(TeamGallery)

export default TeamGalleryConnect

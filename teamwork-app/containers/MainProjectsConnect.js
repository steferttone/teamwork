import { connect } from 'react-redux'

import { getProjectsData } from 'actions/projectsActions'

// Component for connecting
import MainProjectsList from 'components/Blocks/MainProjectsList'

const mapStateToProps = (state) => {
    return {
        projectsList: state.projects,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetProjects: () => {
            dispatch(
                getProjectsData()
            )
        },
    }
}

const MainProjectsListConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainProjectsList)

export default MainProjectsListConnect

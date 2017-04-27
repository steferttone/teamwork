import { connect } from 'react-redux'

import { getRequisitesData } from 'actions/requisitesActions'

// Component for connecting
import RequisitesComponent from 'components/Blocks/RequisitesComponent'

const mapStateToProps = (state) => {
    return {
        requisites: state.requisites,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetRequisites: () => {
            dispatch(
                getRequisitesData()
            )
        },
    }
}

const RequisitesComponentConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(RequisitesComponent)

export default RequisitesComponentConnect

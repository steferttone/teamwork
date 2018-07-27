import { connect } from 'react-redux'

import { getForDillersList } from 'actions/forDillersActions'

// Component for connecting
import ForDillersList from 'components/Blocks/ForDillersList'

const mapStateToProps = (state) => {
    return {
        // test: state,
        forDillersList: state.forDillersList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetForDillersList: () => {
            dispatch(
                getForDillersList()
            )
        },
    }
}

const ForDillersConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(ForDillersList)

export default ForDillersConnect


import { connect } from 'react-redux'

import { getCorpMenuList } from 'actions/corpMenuListActions'

// Component for connecting
import CorpPageContent from 'components/Blocks/CorpPageContent'

const mapStateToProps = (state) => {
    return {
        // test: state,
        corpMenuList: state.corpMenuList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCorpMenuList: () => {
            dispatch(
                getCorpMenuList()
            )
        },
    }
}

const CorpPageConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(CorpPageContent)

export default CorpPageConnect


import { connect } from 'react-redux'

import { getCorpMenuList } from 'actions/CorpMenuListActions'

// Component for connecting
import CorpMenuBlock from 'components/Blocks/CorpMenuBlock'

const mapStateToProps = (state) => {
    return {
        corpMenuBlock: state.corpMenuBlock,
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

const CorpMenuBlockConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(CorpMenuBlock)

export default CorpMenuBlockConnect


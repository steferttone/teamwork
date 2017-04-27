import { connect } from 'react-redux'

import { getProposalData } from 'actions/proposalActions'

// Component for connecting
import ProposalComponent from 'components/Blocks/ProposalComponent'

const mapStateToProps = (state) => {
    return {
        proposalList: state.proposal,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetProposals: () => {
            dispatch(
                getProposalData()
            )
        },
    }
}

const ProposalComponentConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProposalComponent)

export default ProposalComponentConnect

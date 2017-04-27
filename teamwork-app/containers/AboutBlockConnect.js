import { connect } from 'react-redux'

import { getAboutUsData } from 'actions/aboutUsActions'

// Component for connecting
import AboutBlock from 'components/Blocks/AboutBlock'

const mapStateToProps = (state) => {
    return {
        aboutUsData: state.aboutUs,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetAboutUsData: () => {
            dispatch(
                getAboutUsData()
            )
        },
    }
}

const AboutBlockConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(AboutBlock)

export default AboutBlockConnect

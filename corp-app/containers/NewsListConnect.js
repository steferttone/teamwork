import { connect } from 'react-redux'

import { getNewsList } from 'actions/newsListActions'

// Component for connecting
import NewsList from 'components/Blocks/NewsList'

const mapStateToProps = (state) => {
    return {
        // test: state,
        newsList: state.newsList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetNewsList: () => {
            dispatch(
                getNewsList()
            )
        },
    }
}

const NewsListConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsList)

export default NewsListConnect


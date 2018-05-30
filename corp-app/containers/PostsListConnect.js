import { connect } from 'react-redux'

import { getPostsList } from 'actions/postsListActions'

// Component for connecting
import PostsList from 'components/Blocks/PostsList'

const mapStateToProps = (state) => {
    return {
        // test: state,
        postsList: state.postsList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetPostsList: () => {
            dispatch(
                getPostsList()
            )
        },
    }
}

const PostsListConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostsList)

export default PostsListConnect


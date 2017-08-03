import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {commentSelectorFactory} from '../selectors'

function Comment({comment}) {
    console.log('*** Comment, comment = ', comment);
    const content = comment && comment.toJS();

    if (!content) {
        return null
    }

    return (
        <div>
            {content.text} <b>by {content.user}</b>
        </div>
    )
}

Comment.propTypes = {
    //ownProps
    id: PropTypes.string,
    //from connect
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    }).isRequired
}

const createMapStateToProps = () => {
    const commentSelector = commentSelectorFactory()

    return (state, ownProps) => ({
        comment: commentSelector(state, ownProps)
    })
}

export default connect(createMapStateToProps)(Comment)
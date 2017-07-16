import React from 'react'
import PropTypes from 'prop-types'

function Comment({comment}) {
    let propTypes = {
              comments: PropTypes.array
    }
    return (
        <div>
            {comment.text} <b>by {comment.user}</b>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    }).isRequired
}

export default Comment
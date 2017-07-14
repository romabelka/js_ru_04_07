import React from 'react'
import PropTypes from 'prop-types'

function Comment({comment}) {
    return (
        <div>
            {comment.text} <b>by {comment.user}</b>
        </div>
    )
}

Comment.propTypes = {
    id: PropTypes.number,
    user: PropTypes.string,
    text: PropTypes.string
}

export default Comment
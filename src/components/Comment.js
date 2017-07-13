import React from 'react'
import PropTypes from 'prop-types'

function Comment({comment}) {
    return (
        <div>
            {comment.text} <b>by {comment.user}</b>
        </div>
    )
}
Comment.PropTypes = {
       comment: PropTypes.bool.isRequired
    };

export default Comment
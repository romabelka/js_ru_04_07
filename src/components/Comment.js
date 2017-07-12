import React from 'react';
import PropTypes from 'prop-types';

function Comment({comment}) {
    return (
        <div>
            {comment.text} <b>by {comment.user}</b>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.string.isRequired,
        date: PropTypes.string,
        title: PropTypes.string,
        text: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.object)
    })
}

export default Comment
import React from 'react';
import PropTypes from 'prop-types';

const Comment =( {text, user} ) => {
    return (
        <div>
            {text} <b>by {user}</b>
        </div>
    )
};

Comment.propTypes = {
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
};

export default Comment;
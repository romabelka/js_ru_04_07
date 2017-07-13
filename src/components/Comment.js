import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ user, text }) =>
    <div>
        <em>{ user }</em>
        <p>{ text }</p>
    </div>


Comment.propTypes = {
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Comment;
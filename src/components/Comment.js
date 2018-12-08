import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({comment}) => {
    return (
        <p>
            {comment.text}<br/>
            <b>{comment.user}</b>
        </p>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    })
}

export default Comment;
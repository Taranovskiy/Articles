import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Comment = ({ comment }) => (
    <p>
        {comment.text}
        <br />
        <b>{comment.user}</b>
    </p>
);

Comment.propTypes = {
    id: PropTypes.string.isRequired,
    //  from connect
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
    }),
};

export default connect((state, ownProps) => ({
    comment: state.comments.find(comment => comment.id === ownProps.id),
}))(Comment);

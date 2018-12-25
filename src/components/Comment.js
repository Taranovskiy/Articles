import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { commentSelectorFactory } from '../selectors';

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

const mapStateToProps = () => {
    const commentSelector = commentSelectorFactory();
    return (state, ownProps) => ({
        comment: commentSelector(state, ownProps),
    });
};

export default connect(mapStateToProps)(Comment);

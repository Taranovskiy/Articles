import React from 'react';

export default ({comment}) => {
    return (
        <p>
            {comment.text}<br/>
            <b>{comment.user}</b>
        </p>
    );
}

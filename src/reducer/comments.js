import { normalizedComments as defaultComments } from '../fixtures';
import { ADD_COMMENT } from '../constants';

const commentsMap = defaultComments.reduce((acc, comment) => {
    acc[comment.id] = comment;
    return acc;
}, {});

export default (commentsState = commentsMap, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_COMMENT:
            // console.log('--->>', 'commentsState', commentsState);
            // console.log('--->>', 'payload', payload);
            commentsState[payload.id] = {
                id: payload.id,
                user: payload.userName,
                text: payload.textOfComment,
            };

            return commentsState;
        default:
            return commentsState;
    }
};

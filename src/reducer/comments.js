import { normalizedComments as defaultComments } from '../fixtures';
import { ADD_COMMENT } from '../constants';
import { arrToMap } from '../helpers';

const commentsMap = arrToMap(defaultComments);

export default (commentsState = commentsMap, action) => {
    const { type, payload, id } = action;

    switch (type) {
        case ADD_COMMENT:
            return { ...commentsState, [id]: { ...payload.comment, id } };
        default:
            return commentsState;
    }
};

import { DELETE_ARTICLE } from '../constants';

export default store => next => (action) => {
    const { type } = action;
    const generateId = () => Math.random()
        .toString(36)
        .substr(2, 9);

    switch (type) {
        case DELETE_ARTICLE:
            console.log('--->>', 'ID', generateId());
            next(action);
            break;
        default:
            next(action);
    }
};

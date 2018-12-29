import { ADD_COMMENT } from '../constants';

export default store => next => (action) => {
    const { type } = action;
    const generateId = () => Math.random()
        .toString(36)
        .substr(2, 9);

    switch (type) {
        case ADD_COMMENT:
            console.log('--->>', 'state before:', store.getState());
            action.payload.id = generateId();
            next(action);
            console.log('--->>', 'state after:', store.getState());
            break;
        default:
            next(action);
    }
};

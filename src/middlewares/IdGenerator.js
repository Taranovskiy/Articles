export default store => next => (action) => {
    if (!action.generateId) {
        next(action);
    }

    const generateId = () => Math.random()
        .toString(36)
        .substr(2, 9);

    next({ ...action, id: generateId() });
};

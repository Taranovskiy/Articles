import appDispatcher from '../dispatcher';

export const deleteArticle = (id) => {
    const action = {
        type: 'DELETE_ARTICLE',
        payload: {
            id,
        },
    };

    appDispatcher.dispatch(action);
};

import appDispatcher from '../dispatcher';
import { DELETE_ARTICLE } from '../constans';

export const deleteArticle = (id) => {
    const action = {
        type: DELETE_ARTICLE,
        payload: {
            id,
        },
    };

    appDispatcher.dispatch(action);
};

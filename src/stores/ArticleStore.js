import BasicStore from './BasicStore';
import { DELETE_ARTICLE } from '../constans';

export default class ArticleStore extends BasicStore {
    constructor(...args) {
        super(...args);

        this._registerActionSubscription((action) => {
            const { type, payload } = action;
            switch (type) {
            case DELETE_ARTICLE:
                this._delete(payload.id);
                this.emitChange();
                break;

            default:
                break;
            }
        });
    }
}

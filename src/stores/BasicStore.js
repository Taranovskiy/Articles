import { EventEmitter } from 'events';
import appDispatcher from '../dispatcher';

export default class ArticleStore extends EventEmitter {
    constructor(initialState = []) {
        super();
        this._items = {};
        initialState.forEach(this._add);
    }

    _registerActionSubscription(callback) {
        this.dispatchToken = appDispatcher.register(callback);
    }

    getAll() {
        return Object.keys(this._items).map(this.getById);
    }

    getById = id => this._items[id];

    _delete(id) {
        delete this._items[id];
    }

    _add = (item) => {
        this._items[item.id] = item;
    };

    addChangeListener(callback) {
        this.on('SOME_INTERNAL_EVENT', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('SOME_INTERNAL_EVENT', callback);
    }

    emitChange() {
        this.emit('SOME_INTERNAL_EVENT');
    }
}

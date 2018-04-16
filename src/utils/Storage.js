export class Storage {
    constructor() {
        this._container = new Map();
    }

    put(key, value) {
        this._container.set(key, value);
    }

    get(key) {
        return this._container.get(key);
    }

    remove(key) {
        this._container.delete(key);
    }

    values() {
        return this._container.values();
    }
}
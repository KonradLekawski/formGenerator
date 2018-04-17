export class IdGenerator {
    constructor() {
        this._id = 0;
    }

    getNextId() {
        return ++this._id;
    }

    get currentId() {
        return this._id;
    }
}
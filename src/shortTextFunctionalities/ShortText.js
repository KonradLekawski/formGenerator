const classIdentity = 'ShortText-';

export class ShortText {
    constructor(id, description, answer) {
        this._id = id;
        this._description = description;
        this._answer = answer;
    }

    get id() {
        return this._id;
    }

    get content() {
        return this._answer;
    }

    get title() {
        return this._description;
    }

    set content(deliveredContent) {
        this._answer = deliveredContent;
    }

    getAsJSON() {
        return this.content;
    }

    static getThisClassLabelIdentity() {
        return classIdentity;
    }

    injectListener() {
        const identity = ShortText.getThisClassLabelIdentity() + this._id();
        document.querySelector('#' + identity).addEventListener('change', (e) => {
            this._answer = e.target.value;
        });
    }
}
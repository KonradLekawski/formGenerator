export class ShortTextQuestion{
    constructor(id, model) {
        var self = this;
        this._id = id;
        this.type = "question-short";
        this.title = "";
        this.value = "";
        this.model = model;
        this.observers = [];
    }

    get id() {
        return this._id;
    }

    registerObserver(observer) {
        this.observers.push(observer);
    }
    
    notifyAll() {
        for(let observer of this.observers) {
            observer.update(self);
        }
    }

}
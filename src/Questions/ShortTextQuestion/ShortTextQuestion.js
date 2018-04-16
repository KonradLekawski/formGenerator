export class ShortTextQuestion{
    constructor(id) {
        var self = this;
        this._id = id;
        this.type = "question-short";
        this.title = "";
        this.value = "";
        this.observers = [];
    }

    get id() {
        return this._id;
    }

    registerObserver(observer) {
        this.observers.push(observer);
    }
    
    notifyAll() {
        for(let observer in this.observers) {
            observer.update(self);
        }
    }

}
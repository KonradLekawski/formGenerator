export class GenericElementModel {
    constructor(id, value, type) {
        this.objectType = type;
        this.id = id;
        this.value = value;
        this.observers = [];
    }

    registerObserver(observer) {
        this.observers.push(observer);
    }
    
    notifyAll() {
        for(let observer of this.observers) {
            observer.update(this);
        }
    }
}
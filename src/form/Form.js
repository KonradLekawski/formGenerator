export class Form {
    constructor(id) {
        var self = this;
        this.name = name;
        this.questions = [];
    }

    get id() {
        return this.id;
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
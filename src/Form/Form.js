export class Form {
    constructor(id) {
        var self = this;
        this.type = "form";
        this.id = id;
        this.name = name;
        this.questions = [];
        this.observers = [];
    }

    addQuestion(question) {
        this.questions.push(question);
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
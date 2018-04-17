export class FormView {
    constructor() {
        this.element = this.createElement();
        this.registerEvents();
    }

    createElement() {
        let elem = document.createElement('div');
        return elem;
    }

    addQuestion(question) {
        this.element.appendChild(question.view.element);
    }


    registerEvents() {
        
    }
}
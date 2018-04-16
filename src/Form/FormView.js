export class FormView {
    constructor(controller) {
        this.controller = controller;
        this.element = this.createElement();
        this.registerEvents();
        this.controller.model.registerObserver(this);
    }

    createElement() {
        let elem = document.createElement('div');
        elem.id = this.controller.model.id;
        return elem;
    }

    addQuestion(questionView) {
        this.controller.addQuestion(questionView);
        this.element.appendChild(questionView.element);
    }

    registerEvents() {
        
    }

    update(model) {
        console.log(this.controller.model);
    }
}
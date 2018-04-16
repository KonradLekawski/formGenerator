export class FormView {
    constructor(controller) {
        this.controller = controller;
        this.element = createElement();
        registerEvents();
        this.controller.model.registerObserver(this);
    }

    createElement() {
        let elem = document.createElement('div');
        elem.id = this.textInputController.model.id;
        return elem;
    }

    registerEvents() {
        
    }

    update(model) {
        
    }
}
export class ShortTextQuestionView {
    constructor(controller) {
        this.controller = controller;
        this.element = this.createElement();
        this.registerEvents();
        this.controller.model.registerObserver(this);
    }

    createElement() {
        let elem = document.createElement('div');
        elem.appendChild(this.controller.titleView.element);
        elem.appendChild(this.controller.textInputView.element);
        elem.id = this.controller.model.id;
        return elem;
    }

    registerEvents() {
        
    }

    update(model) {
        
    }

}
export class TextInputView {

    constructor(controller, defaultValue) {
        this.controller = controller;
        this.element = this.createElement();

        this.element.value = defaultValue;

        this.registerEvents();
        this.controller.model.registerObserver(this);
    }

    createElement() {
        let elem = document.createElement('input');
        elem.type = "text";
        elem.id = this.controller.model.id;
        return elem;
    }

    registerEvents() {
        this.element.addEventListener('change', this.controller);
    }

    update(model) {
        this.element.value = model.value;
    }


}


export class TitleView {

    constructor(controller, defaultValue) {
        this.controller = controller;
        this.element = this.createElement();

        this.element.innerText = defaultValue;

        this.registerEvents();
        this.controller.model.registerObserver(this);
    }

    createElement() {
        let elem = document.createElement('h3');
        let id = this.controller.model.id;
        return elem;
    }

    registerEvents() {
        this.element.addEventListener('change', this.controller);
    }

    update(model) {
        this.element.innerText = model.value;
    }
}
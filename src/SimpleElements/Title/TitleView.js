export class TitleView {

    constructor(controller, defaultValue, editable) {
        this.controller = controller;

        if(!editable) {
            editable = false;
        }
        this.element = this.createElement(editable);

        this.element.innerText = defaultValue;

        this.registerEvents();
        this.controller.model.registerObserver(this);
    }

    createElement(editable) {
        let elem = document.createElement('h3');
        elem.setAttribute("contenteditable", editable);
        let id = this.controller.model.id;
        return elem;
    }

    registerEvents() {
        this.element.addEventListener('input', this.controller);
    }

    update(model) {
        this.element.innerText = model.value;
    }
}
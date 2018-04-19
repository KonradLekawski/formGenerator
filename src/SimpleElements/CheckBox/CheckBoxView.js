export class CheckBoxView {

    constructor(controller, value) {
        this.controller = controller;
        this.value = value;
        this.element = this.createElement();
        this.registerEvents();
        this.controller.model.registerObserver(this);
    }

    createElement() {

        let label = document.createElement('label');
        let text = document.createTextNode(this.value);
        label.appendChild(text);


        let elem = document.createElement('input');
        elem.type = "checkbox";
        elem.id = this.controller.model.id;
        elem.name = this.controller.model;
        elem.value = this.value;
        label.appendChild(elem);

        return label;
    }

    registerEvents() {
        this.element.addEventListener('change', this.controller.executeOnChangeEvent());
    }

    update(model) {

    }


}

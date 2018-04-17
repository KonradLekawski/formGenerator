export class DropDownView {
        constructor(controller, values) {
        this.controller = controller;
        this.element = this.createElement();

        this.element.value = defaultValue;

        this.registerEvents();
        this.controller.model.registerObserver(this);
    }

    createElement(values) {
        let elem = document.createElement('select');
        elem.id = this.controller.model.id;
        this.createOptions(elem, values);
        return elem;
    }

    createOptions(select, values) {
        for(let value of values) {
            let newOption = document.createElement('option');
            select.appendChild(newOption);
        }
    }

    registerEvents() {
        this.element.addEventListener('change', this.controller);
    }

    update(model) {
        this.element.value = model.value;
    }
}
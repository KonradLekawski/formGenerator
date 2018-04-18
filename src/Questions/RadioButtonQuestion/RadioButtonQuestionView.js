export class RadioButtonQuestionView {

    constructor(titleView, radioButtonViews) {
        this.element = this.createElement(titleView, radioButtonViews);
        this.registerEvents();
    }

    createElement(titleView, radioButtonViews) {
        let elem = document.createElement('div');
        elem.appendChild(titleView.element);

        for(let radioButtonView of radioButtonViews) {
            elem.appendChild(radioButtonView.element);
        }

        return elem;

    }

    registerEvents() {

    }

    update(model) {

    }
}
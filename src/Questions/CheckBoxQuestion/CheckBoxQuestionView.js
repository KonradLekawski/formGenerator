export class CheckBoxQuestionView {

    constructor(titleView, checkBoxViews) {
        this.element = this.createElement(titleView, checkBoxViews);
        this.registerEvents();
    }

    createElement(titleView, checkBoxViews) {
        let elem = document.createElement('div');
        elem.appendChild(titleView.element);

        for(let checkBoxView of checkBoxViews) {
            elem.appendChild(checkBoxView.element);
        }

        return elem;

    }

    registerEvents() {

    }

    update(model) {
    }
}
export class ShortTextQuestionView {
    constructor(titleView, textInputView) {
        this.element = this.createElement(titleView, textInputView);
        this.registerEvents();
    }

    createElement(titleView, textInputView) {
        let elem = document.createElement('div');
        elem.appendChild(titleView.element);
        elem.appendChild(textInputView.element);
        return elem;
    }

    registerEvents() {
        
    }

    update(model) {
        
    }

}
import {TextInputView} from "./TextInputView.js";

export class TextareaInputView extends TextInputView {
    createElement() {
        let elem = document.createElement('textarea');
        elem.id = this.controller.model.id;
        return elem;
    }
}
import { ShortTextQuestion } from "/Questions/ShortTextQuestion/ShortTextQuestion.js";

export class ShortTextQuestionController {
    constructor(idGenerator, simpleElementFactory) {
        var self = this;
        this._simpleElementFactory = simpleElementFactory;

        this.model = new ShortTextQuestion(idGenerator);

        this.titleView = this._simpleElementFactory.getSimpleElementView("title", [self], "Tytuł");
        this.textInputView = this._simpleElementFactory.getSimpleElementView("text-input", [self], "");

        console.log(this.model);
    }

    update(notifyingModel) {
        switch(notifyingModel.objectType) {
            case "text-input":
                this.model.value = notifyingModel.value;
                this.model.notifyAll();
                break;
            case "title":
                this.model.vaule = notifyingModel.value;
                this.model.notifyAll();
                break

            default:
                console.log("unknown type of model");
        }
    }

}
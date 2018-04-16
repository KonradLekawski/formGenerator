import { ShortTextQuestion } from "/Questions/ShortTextQuestion/ShortTextQuestion.js";

export class ShortTextQuestionController {
    constructor(idGenerator, simpleElementFactory, title, defaultValue) {
        var self = this;
        this._simpleElementFactory = simpleElementFactory;

        this.model = new ShortTextQuestion(idGenerator.getNextId());

        this.titleView = this._simpleElementFactory.getSimpleElementView("title", [self], title);
        this.textInputView = this._simpleElementFactory.getSimpleElementView("text-input", [self], defaultValue);
    }

    update(notifyingModel) {
        switch(notifyingModel.objectType) {
            case "text-input":
                this.model.value = notifyingModel.value;
                this.model.notifyAll();
                break;
            case "title":
                this.model.label = notifyingModel.value;
                this.model.notifyAll();
                break

            default:
                console.log("unknown type of model");
        }
    }

}
import { TextareaQuestionView } from "./TextareaQuestionView.js";

export class TexareatQuestion {
    constructor(idGenerator, simpleElementFactory, model, title, defaultValue) {
        this._simpleElementFactory = simpleElementFactory;

        this.model = {
            "model": model
        };
        this.observers = [];

        let titleView = this._simpleElementFactory.getSimpleElementView("title", [this], title);
        let textareaInputView = this._simpleElementFactory.getSimpleElementView("textarea", [this], defaultValue);

        this.view = new TextareaQuestionView(titleView, textareaInputView);
    }

    update(notifyingModel) {
        switch(notifyingModel.objectType) {
            case "textarea":
                this.model["value"] = notifyingModel.value;
                break;
            case "title":
                this.model["label"] = notifyingModel.value;
                break

            default:
                console.log("unknown type of model");
        }

        this.notifyAll();
    }

    registerObserver(observer) {
        this.observers.push(observer);
    }

    notifyAll() {
        for(let observer of this.observers) {
            observer.update(self);
        }
    }
}
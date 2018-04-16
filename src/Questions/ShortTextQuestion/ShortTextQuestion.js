import { ShortTextQuestionView } from "/Questions/ShortTextQuestion/ShortTextQuestionView.js";

export class ShortTextQuestion {
    constructor(idGenerator, simpleElementFactory, model, title, defaultValue) {
        var self = this;
        this._simpleElementFactory = simpleElementFactory;

        this.model = {
            "model": model
        };
        this.observers = [];

        let titleView = this._simpleElementFactory.getSimpleElementView("title", [self], title);
        let textInputView = this._simpleElementFactory.getSimpleElementView("text-input", [self], defaultValue);

        this.view = new ShortTextQuestionView(titleView, textInputView);
    }

    update(notifyingModel) {
        switch(notifyingModel.objectType) {
            case "text-input":
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
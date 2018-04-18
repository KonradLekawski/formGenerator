import { ShortTextQuestionView } from "./ShortTextQuestionView.js";

export class ShortTextQuestion {
    constructor(id, simpleElementFactory, model, title, defaultValue) {
        this._simpleElementFactory = simpleElementFactory;

        this.model = {
            model: model
        };

        this.observers = [];

        let titleView = this._simpleElementFactory.getSimpleElementView("title", [this], title);
        let textInputView = this._simpleElementFactory.getSimpleElementView("text-input", [this], defaultValue);

        this.view = new ShortTextQuestionView(titleView, textInputView);
    }

    update(notifyingModel) {
        switch(notifyingModel.objectType) {
            case "text-input":
                this.model.value = notifyingModel.value;
                break;
            case "title":
                this.model.label = notifyingModel.value;
                break;
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
            observer.update(this);
        }
    }
}
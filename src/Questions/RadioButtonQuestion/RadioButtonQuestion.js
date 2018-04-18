import {RadioButtonQuestionView} from "./RadioButtonQuestionView.js";

export class RadioButtonQuestion {

    constructor(idGenerator, simpleElementFactory, model, title, values) {
        this._simpleElementFactory = simpleElementFactory;
        this.model = {
            "model": model
        };
        this.observers = [];
        let titleView = this._simpleElementFactory.getSimpleElementView("title", [this], title);
        let radioButtonViews = this.createRadioButtonViews(values);
        this.view = new RadioButtonQuestionView(titleView, radioButtonViews);
    }

    createRadioButtonViews(values) {
        let radioButtonViews = [];
        for(let value of values) {
            let newRadioButtonView = this._simpleElementFactory.getSimpleElementView("radio", [this], value);
            radioButtonViews.push(newRadioButtonView);
        }
        return radioButtonViews;
    }

    update(notifyingModel) {

        switch(notifyingModel.objectType) {
            case "radio":
                this.model["value"] = notifyingModel.value;
                break;
            case "title":
                this.model["label"] = notifyingModel.value;
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
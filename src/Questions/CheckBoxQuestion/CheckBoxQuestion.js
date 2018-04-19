import {CheckBoxQuestionView} from "./CheckBoxQuestionView.js";


export class CheckBoxQuestion {

    constructor(idGenerator, simpleElementFactory, model, title, values) {
        this._simpleElementFactory = simpleElementFactory;
        this.model = {
            "model": model
        };
        this.observers = [];
        let titleView = this._simpleElementFactory.getSimpleElementView("title", [this], title);
        let checkBoxViews = this.createCheckBoxes(values);
        this.view = new CheckBoxQuestionView(titleView, checkBoxViews);
    }

    createCheckBoxes(values) {
        let checkboxViews = [];
        for(let value of values) {
            let newCheckBoxView = this._simpleElementFactory.getSimpleElementView("checkbox", [this], value);
            checkboxViews.push(newCheckBoxView);
        }
        return checkboxViews;
    }

    update(notifyingModel) {

        switch(notifyingModel.objectType) {
            case "checkbox":
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
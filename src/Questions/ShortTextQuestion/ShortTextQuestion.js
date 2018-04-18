import { ShortTextQuestionView } from "./ShortTextQuestionView.js";
import { viewElementsTypes} from "../../SimpleElements/SimpleElementFactory";

export class ShortTextQuestion {
    constructor(id, simpleElementFactory, model, title, defaultValue) {
        this._simpleElementFactory = simpleElementFactory;

        this.model = {
            model: model
        };

        this.observers = [];

        let titleView = this._simpleElementFactory.getSimpleElementView(viewElementsTypes.title, [this], title);
        let textInputView = this._simpleElementFactory.getSimpleElementView(viewElementsTypes.textInput, [this], defaultValue);

        this.view = new ShortTextQuestionView(titleView, textInputView);
    }

    update(notifyingModel) {
        switch(notifyingModel.objectType) {
            case viewElementsTypes.textInput:
                this.model.value = notifyingModel.value;
                break;
            case viewElementsTypes.title:
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
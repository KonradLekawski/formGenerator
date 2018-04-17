import { IdGenerator } from "../utils/IdGenerator.js";
import { GenericElementModel } from "./GenericElementModel.js";
import { OnChangeController } from "./OnChangeController.js";
import { TextInputView } from "../SimpleElements/TextInput/TextInputView.js";
import { TitleView } from "../SimpleElements/Title/TitleView.js";
import {TextareaInputView} from "./TextInput/TextareaInputView";

export class SimpleElementFactory {

    constructor(idGenerator) {
        this.idGenerator = idGenerator;
    }

    getSimpleElementView (type, observers, defaultValue) {
        let id = this.idGenerator.getNextId(this);
        let model = new GenericElementModel(id, defaultValue, type);
        let controller = new OnChangeController(model);
        
        let view;
        switch(type) {
            case "text-input":
                view = new TextInputView(controller, defaultValue);
                break;
            case "title":
                view = new TitleView(controller, defaultValue, true);
                break;
            case "textarea":
                view = new TextareaInputView(controller, defaultValue);
                break;
            default:
                console.log("unknown type of model");
        }

        for(let observer of observers) {
            model.registerObserver(observer);
        }

        model.notifyAll();

        return view;
    }
}
import { IdGenerator } from "../utils/IdGenerator.js";
import { GenericElementModel } from "./GenericElementModel.js";
import { OnChangeController } from "./OnChangeController.js";
import { TextInputView } from "../SimpleElements/TextInput/TextInputView.js";
import { TitleView } from "../SimpleElements/Title/TitleView.js";
import { availableStrategies, UpdateStrategiesFactory} from "../Questions/updateStrategies/UpdateStrategiesFactory.js";

export const viewElementsTypes = (function () {
    return Object.freeze({
        textInput: 'text-input',
        title: 'title',
        checkBoxInput: 'checkbox-input'
    });
})();

export class SimpleElementFactory {

    constructor(idGenerator) {
        this.idGenerator = idGenerator;
    }

    getSimpleElementView (type, observers, defaultValue) {
        return (function(id) {
            let model = new GenericElementModel(id, defaultValue, type);
            let view = createElementOfView(type, model, defaultValue);

            for(let observer of observers) {
                model.registerObserver(observer);
            }

            model.notifyAll();

            return view;
        })(this.idGenerator.getNextId());
        
        function createElementOfView(type, model, defaultValue) {
            switch(type) {
                case viewElementsTypes.textInput:
                    return createTextInput(model, defaultValue);

                case viewElementsTypes.title:
                    return createTitleInput(model, defaultValue);

                case viewElementsTypes.checkBoxInput:
                    throw "not implemented";

                default:
                    console.log("unknown type of model");
            }
        }

        function createTextInput(model, beginValue) {
            let controller = createController(model, availableStrategies.updateByValue);
            return new TextInputView(controller, beginValue);
        }
        
        function createTitleInput(model, beginValue) {
            let controller = createController(model, availableStrategies.updateByValue);
            return new TitleView(controller, beginValue);
        }

        function createController(model, nameOfStrategy) {
            const strategy = UpdateStrategiesFactory.getStrategyByName(nameOfStrategy);
            return new OnChangeController(model, strategy);
        }
    }
}
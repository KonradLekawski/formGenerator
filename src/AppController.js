import { IdGenerator } from "./utils/IdGenerator.js";
import { ShortTextQuestion } from "./Questions/ShortTextQuestion/ShortTextQuestion.js";
import { TextareaQuestion } from "./Questions/TextareaQuestion/TextareaQuestion.js";
import { SimpleElementFactory } from "./SimpleElements/SimpleElementFactory.js";
import { Form } from "./Form/Form.js";
import { FormView } from "./Form/FormView.js";
import {TextareaQuestionView} from "./Questions/TextareaQuestion/TextareaQuestionView";

const userInterfaceQuestionCreator = (function () {
    return {
        get: function () {
            return {
                model: document.getElementById("model").value,
                label: document.getElementById("label").value,
                defaultValue: document.getElementById("defaultValue").value
            }
        }
    }
})();

const AppController = (function () {
    let idGenerator = new IdGenerator();
    let simpleElementFactory = new SimpleElementFactory(idGenerator);
    const form = new Form(idGenerator);

    const initialize = (function () {
        document.getElementById("survey").appendChild(form.view.element);
    })();

    const setupListeners = (function () {
        document.getElementById("createButton").addEventListener('click', createQuestion);
    })();

    function createQuestion() {
        let values = userInterfaceQuestionCreator.get();
        let newQuestion = new TextareaQuestion(idGenerator, simpleElementFactory, values.model, values.label, values.defaultValue);

        form.addQuestion(newQuestion);
        form.printToConsole();
    }
})();

import { IdGenerator } from "./utils/IdGenerator.js";
import { ShortTextQuestion } from "./Questions/ShortTextQuestion/ShortTextQuestion.js";
import { SimpleElementFactory } from "./SimpleElements/SimpleElementFactory.js";
import { Form } from "./Form/Form.js";
import { FormView } from "./Form/FormView.js";
import {RadioButtonQuestion} from "./Questions/RadioButtonQuestion/RadioButtonQuestion.js";

const userInterfaceQuestionCreator = (function () {
    return {
        get: function () {
            return {
                model: document.getElementById("model").value,
                label: document.getElementById("label").value,
                defaultValue: document.getElementById("defaultValue").value,
                questionType: document.getElementById("questionType").value
            }
        }
    }
})();

const availableQuestionTypes = (function () {
    return Object.freeze({
        shortTextQuestion: 'ShortTextQuestion',
        radioButtonQuestion: 'RadioButtonQuestion',
        textAreaQuestion: 'TextareaQuestion'
    });
})();

const AppController = (function () {
    let idGenerator = new IdGenerator();
    const form = new Form(idGenerator);

    const initialize = (function () {
        document.getElementById("survey").appendChild(form.view.element);
    })();

    const setupListeners = (function () {
        document.getElementById("createButton").addEventListener('click', createQuestion);
    })();

    function createQuestion() {
        let values = userInterfaceQuestionCreator.get();
        let simpleElementFactory = new SimpleElementFactory(idGenerator);

        let newQuestion;

        switch (values.questionType) {

            case availableQuestionTypes.radioButtonQuestion:
                newQuestion = new RadioButtonQuestion(idGenerator, simpleElementFactory, values.model, values.label, ["dupa","cyce"] );
                break;

            case availableQuestionTypes.shortTextQuestion:
                newQuestion = new ShortTextQuestion(idGenerator, simpleElementFactory, values.model, values.label, values.defaultValue);
                break;

        }

        form.addQuestion(newQuestion);
        form.printToConsole();

    }
})();

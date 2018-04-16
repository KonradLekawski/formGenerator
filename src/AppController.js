import { IdGenerator } from "/utils/IdGenerator.js";
import { ShortTextQuestion } from "/Questions/ShortTextQuestion/ShortTextQuestion.js";
import { SimpleElementFactory } from "/SimpleElements/SimpleElementFactory.js";
import { Form } from "/Form/Form.js";
import { FormView } from "/Form/FormView.js";

let idGenerator = new IdGenerator();

let simpleElementFactory = new SimpleElementFactory(idGenerator);

let createButton = document.getElementById("createButton");
createButton.addEventListener('click', createQuestion);

var form = new Form(idGenerator);

function createQuestion() {
    let model = document.getElementById("model").value;
    let label = document.getElementById("label").value;
    let defaultValue = document.getElementById("defaultValue").value;
    let newQuestion = new ShortTextQuestion(idGenerator, simpleElementFactory, model, label, defaultValue);

    form.addQuestion(newQuestion);
    form.printToConsole();
}

form.printToConsole();

document.getElementById("survey").appendChild(form.view.element);
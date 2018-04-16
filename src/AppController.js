import { IdGenerator } from "/utils/IdGenerator.js";
import { ShortTextQuestionView } from "/Questions/ShortTextQuestion/ShortTextQuestionView.js";
import { ShortTextQuestionController } from "/Questions/ShortTextQuestion/ShortTextQuestionController.js";
import { SimpleElementFactory } from "/SimpleElements/SimpleElementFactory.js";
import { FormController } from "/Form/FormController.js";
import { FormView } from "/Form/FormView.js";

let idGenerator = new IdGenerator();

let simpleElementFactory = new SimpleElementFactory(idGenerator);

let q1C = new ShortTextQuestionController(idGenerator, simpleElementFactory, "title", "");
let q1V = new ShortTextQuestionView(q1C);

let q2C = new ShortTextQuestionController(idGenerator, simpleElementFactory, "title2", "dupa");
let q2V = new ShortTextQuestionView(q2C);

let formController = new FormController(idGenerator);
let form = new FormView(formController);

form.addQuestion(q1V);
form.addQuestion(q2V);

document.getElementById("survey").appendChild(form.element);
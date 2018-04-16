import { IdGenerator } from "/utils/IdGenerator.js";
import { ShortTextQuestion } from "/Questions/ShortTextQuestion/ShortTextQuestion.js";
import { SimpleElementFactory } from "/SimpleElements/SimpleElementFactory.js";
import { Form } from "/Form/Form.js";
import { FormView } from "/Form/FormView.js";

let idGenerator = new IdGenerator();

let simpleElementFactory = new SimpleElementFactory(idGenerator);

let q1 = new ShortTextQuestion(idGenerator, simpleElementFactory, "title1", "");
let q2 = new ShortTextQuestion(idGenerator, simpleElementFactory, "title2", "dupa");

let form = new Form(idGenerator);

form.addQuestion(q1);
form.addQuestion(q2);

document.getElementById("survey").appendChild(form.view.element);
import { IdGenerator } from "/utils/IdGenerator.js";
import { ShortTextQuestionView } from "/Questions/ShortTextQuestion/ShortTextQuestionView.js";
import { ShortTextQuestionController } from "/Questions/ShortTextQuestion/ShortTextQuestionController.js";
import { SimpleElementFactory } from "/SimpleElements/SimpleElementFactory.js";

let idGenerator = new IdGenerator();

let simpleElementFactory = new SimpleElementFactory(idGenerator);

let q1C = new ShortTextQuestionController(idGenerator, simpleElementFactory);
let q1V = new ShortTextQuestionView(q1C);

document.getElementById("survey").appendChild(q1V.element);
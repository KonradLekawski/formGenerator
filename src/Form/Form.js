import { FormView } from "./FormView.js";

export class Form {
    constructor(idGenerator) {
        var self = this;
        this._id = idGenerator.getNextId();
        this.model = {
            "fields" : []
        };

        this.questions = [];
        this.view = new FormView();
    }

    addQuestion(question) {
        this.questions.push(question);
        this.model["fields"].push(this.questions.model);
        this.view.addQuestion(question);
        question.registerObserver(this);
    }

    update() {
        this.model["fields"] = [];
        for(let question of this.questions) {
            this.model["fields"].push(question.model);
        }
        this.printToConsole();
    }

    toJson() {
        let json = {};
        for(let question of this.model.fields) {
            json[question.model] = question.value;
        }
        return json;
    }

    printToConsole() {
        console.log("schema:");
        console.log(this.model);
        console.log("answer:");
        console.log(this.toJson());
    }
}
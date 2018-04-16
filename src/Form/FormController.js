import { Form } from "/Form/Form.js";

export class FormController {
    constructor(idGenerator) {
        var self = this;
        this.model = new Form(idGenerator.getNextId());
        this.questionViews = [];
    }

    addQuestion(questionView) {
        this.questionViews.push(questionView);
        questionView.controller.model.registerObserver(this);
    }

    update() {
        let questionModels = [];
        for(let questionView of this.questionViews) {
            let questionModel = questionView.controller.model;
            questionModels.push(questionModel);
        }

        this.model.questions = questionModels;
        this.model.notifyAll();
    }
}
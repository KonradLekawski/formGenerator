export class OnChangeController {
    constructor(model) {
        this.model = model;
    }

    handleEvent(e) {
        e.stopPropagation();
        switch(e.type) {
            case "change":
            this.changeHandler(e.target);
                break;
            case "input":
            this.inputHandler(e.target);
                break;
            default:
            console.log(e.target);
        }
    }

    changeHandler(target) {
        this.model.value = target.value;
        this.model.notifyAll();
    }

    inputHandler(target) {
        this.model.value = target.innerText;
        this.model.notifyAll();
    }
}
export class OnChangeController {
    constructor(model) {
        var self = this;
        this.model = model;
    }

    handleEvent(e) {
        e.stopPropagation();
        switch(e.type) {
            case "change":
            this.changeHandler(e.target);
                break;
            default:
            console.log(e.target);
        }
    }

    changeHandler(target) {
        this.model.value = target.value;
        this.model.notifyAll();
    }


}
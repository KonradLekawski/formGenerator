export class OnChangeController {

    constructor(model, strategy) {
        this.model = model;
        this.strategy = strategy;
    }

    executeOnChangeEvent() {
        return (e) => {
            e.stopPropagation();

            switch(e.type) {
                case "change":
                    this.strategy(this.model, e);
                    this.model.notifyAll();
                    break;

                default:
                    console.log(e.target);
            }
        };
    }
}
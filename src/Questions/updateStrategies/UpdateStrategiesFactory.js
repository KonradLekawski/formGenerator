export const availableStrategies = (function () {
    return Object.freeze({
        updateByValue: 'update-by_value',
        updateRadioBoxState: 'update-radiobox-state'
    })
})();

export class UpdateStrategiesFactory {
    static getStrategyByName(strategyType) {
        switch (strategyType) {
            case availableStrategies.updateByValue:
                return updateByValue;

            case availableStrategies.updateRadioBoxState:
                return updateByValue;

            default:
                throw "> " + strategyType + " this strategyType is invalid";
        }

        function updateByValue(model, e) {
            let target = e.target;
            model.value = target.value;
        }
        
        function updateByCheckBoxStrategy() {
            
        }

        function updateByRadioBoxStrategy() {
            let lastTarget = undefined;

            return function (model, e) {
                let target = e.target;

                if (lastTarget === undefined) {
                    lastTarget = target;
                } else {
                    lastTarget.value = 'off';
                    lastTarget = target;
                }

                model.value = target.value;
            }
        }
    }
}

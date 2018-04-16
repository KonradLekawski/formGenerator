import {shortTextController} from "./shortTextFunctionalities/ShortTextController.js";

const AppController = (function (shortTextCTRL) {

    {
        // update view co zmiane w środku ?
        document.querySelector('.survey').addEventListener('change', (e) => {
            refresh();
        });

        // jakis button z formularzem?
        document.querySelector('.add__shortText').addEventListener('click', (e) => {
            shortTextCTRL.addShortText();
        })
    }

    function refresh() {

    }

})(shortTextController);
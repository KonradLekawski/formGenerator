import {Storage} from "../utils/Storage.js";
import {shortTextUI} from "./ShortTextUserInterface.js";
import {IdGenerator} from "../utils/IdGenerator.js";
import {ShortText} from "./ShortText.js";

class ShortTextController {
    constructor(shortTextUI, idGenerator) {
        this._shortTextStorage = new Storage();
        this._idGenerator = idGenerator;
        this._shortTextUI = shortTextUI;
    }

    addShortText() {
        const nextId = this._idGenerator.getNextId();
        const inputs = this._shortTextUI.loadInputs();
        const newlyCreatedShortText = new ShortText(nextId, inputs.title);

        this._shortTextStorage.put(nextId, newlyCreatedShortText);
    }
}

export const shortTextController = new ShortTextController(shortTextUI, new IdGenerator());
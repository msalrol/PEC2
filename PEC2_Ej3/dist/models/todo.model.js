/**
 * @class Model
 *
 * Manages the data of the application.
 */
export class Todo {
    constructor({ text, complete = false }) {
        this.id = uuidv4();
        this.text = text;
        this.complete = complete;
    }
}
function uuidv4() {
    return crypto.randomUUID ? crypto.randomUUID() :
        'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
}

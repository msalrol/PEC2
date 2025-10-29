/**
 * @class Model
 *
 * Manages the data of the application.
 */

export interface ITodo {
  text: string;
  complete: boolean;
  id?: string;
}

export class Todo {
  text: string;
  complete: boolean;
  id: string;

  constructor({ text, complete = false}: ITodo) {
    this.id = uuidv4();
    this.text = text;
    this.complete = complete;
  }


}

function uuidv4(): string {
  return crypto.randomUUID ? crypto.randomUUID() : 
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

/**
 * @class Model
 *
 * Manages the data of the application.
 */
import { v4 as uuidv4 } from "uuid";

export interface ITodo {
  text: string;
  complete: boolean;
}

export class Todo {
  text: string;
  complete: boolean;
  id: string;

  constructor({ text, complete }: ITodo) {
    this.id = uuidv4();
    this.text = text;
    this.complete = complete;
  }


}

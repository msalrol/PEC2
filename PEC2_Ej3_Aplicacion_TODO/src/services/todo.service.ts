/**
 * @class Service
 *
 * Manages the data of the application.
 */
/**
 * @class Service
 *
 * Manages the data of the application.
 */
import type { ITodo } from "../models/todo.model";
import { Todo } from "../models/todo.model";


class TodoService {

  todos: ITodo[];
  onTodoListChanged!: (todos: ITodo[]) => void;

  constructor() {
    this.todos = (JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[]).map(
      todo => new Todo(todo)
    );
  }



  bindTodoListChanged(callback: (todos: ITodo[]) => void) {
    this.onTodoListChanged = callback;
  }


  _commit(todos: ITodo[]) {
    this.onTodoListChanged(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  addTodo(text: string) {
    this.todos.push(new Todo({ text }));

    this._commit(this.todos);
  }

  editTodo(id: string, updatedText: string) {
    this.todos = this.todos.map(todo =>
      todo.id === id
        ? new Todo({
          ...todo,
          text: updatedText
        })
        : todo
    );

    this._commit(this.todos);
  }

  deleteTodo(_id: string) {
    this.todos = this.todos.filter(({ id }) => id !== _id);

    this._commit(this.todos);
  }

  toggleTodo(_id: string) {
    this.todos = this.todos.map(todo =>
      todo.id === _id ? new Todo({ ...todo, complete: !todo.complete }) : todo
    );

    this._commit(this.todos);
  }
}


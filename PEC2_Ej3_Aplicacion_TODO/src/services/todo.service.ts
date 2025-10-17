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

  constructor() {
    this.todos = (JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[]).map(
      todo => new Todo(todo)
    );
  }
}

  bindTodoListChanged(callback) {
    this.onTodoListChanged = callback;
  }

  _commit(todos) {
    this.onTodoListChanged(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  addTodo(text) {
    this.todos.push(new Todo({ text }));

    this._commit(this.todos);
  }

  editTodo(id, updatedText) {
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

  deleteTodo(_id) {
    this.todos = this.todos.filter(({ id }) => id !== _id);

    this._commit(this.todos);
  }

  toggleTodo(_id) {
    this.todos = this.todos.map(todo =>
      todo.id === _id ? new Todo({ ...todo, complete: !todo.complete }) : todo
    );

    this._commit(this.todos);
  }
}

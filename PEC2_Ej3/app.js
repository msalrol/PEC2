import { TodoController } from "./dist/controllers/todo.controller.js";
import { TodoService } from "./dist/services/todo.service.js";
import { TodoView } from "./dist/views/todo.views.js";


const app = new TodoController(new TodoService(), new TodoView());

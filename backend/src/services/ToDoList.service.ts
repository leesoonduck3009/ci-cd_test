import { Database } from "../database/Database";
import { Task } from "../models/Task";

class ToDoListService {

  addTask(task: Task): void {


    Database.DataTask.push(task);
  }

  getTasks(): Task[] {
    return Database.DataTask;
  }

  getTaskByTitle(title: string): Task | undefined {
    return Database.DataTask.find(t => t.title === title);
  }

  updeteTask(updatedTask: Task): void {
    const index = Database.DataTask.findIndex(t => t.title === updatedTask.title);

    if (index !== -1) {
      Database.DataTask[index] = updatedTask;
    }
  }

  removeTask(title: string): void {
    Database.DataTask = Database.DataTask.filter(t => t.title !== title);
  }
}

const toDoListService = new ToDoListService();
export default toDoListService;
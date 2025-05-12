import { Router } from "express";
import toDoListRoute from "./ToDoList.route"
const route = Router();

route.use("/api/todo", toDoListRoute);

export default route;

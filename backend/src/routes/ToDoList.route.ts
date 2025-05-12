import { Router } from "express";
import toDoListController from "../controllers/ToDoList.controller";
const route = Router();

route.get("/", toDoListController.getToDoList);

route.post("/", toDoListController.addToDoItem);

export default route;
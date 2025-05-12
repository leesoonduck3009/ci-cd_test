import { Request, Response } from 'express';
import toDoListService from '../services/ToDoList.service';
import { Task } from '../models/Task';
class ToDoListController {
    async getToDoList(req: Request, res: Response): Promise<void> {
        try {
            const toDoList = await toDoListService.getTasks();
            res.status(200).json(toDoList);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching to-do list' });
        }
    }

    async addToDoItem(req: Request, res: Response): Promise<void> {
        try {

            const newTask = req.body as Task;
            if( !newTask){
                res.status(400).json({ message: 'task is required' });
                return;
            }

            if (!Task.validate(newTask)) {
                res.status(400).json({ message: 'Title and description are required' });
                return;
            }
            const addedItem = await toDoListService.addTask(newTask);
            res.status(201).json(addedItem);
        } catch (error) {
            res.status(500).json({ message: 'Error adding to-do item' });
        }
    }

    async updateToDoList(req: Request, res: Response): Promise<void> {
        try{
            const updatedTask = req.body as Task;

            if (!updatedTask) {
                res.status(400).json({ message: 'task is required' });
                return;
            }

            if (!Task.validate(updatedTask)) {
                res.status(400).json({ message: 'Title and description are required' });
                return;
            }

            const updatedItem = await toDoListService.updeteTask(updatedTask);
            res.status(200).json(updatedItem);

        }
        catch (error) {
            res.status(500).json({ message: 'Error updating to-do item' });
        }
    }
}
const toDoListController = new ToDoListController();
export default toDoListController;
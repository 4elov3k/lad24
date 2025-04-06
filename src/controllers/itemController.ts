import { Request, Response, NextFunction } from 'express';
import { items, Item } from '@/models/item';
import {TasksStorage} from "@/storage/tasks"
import {TaskNotFoundError} from "@/domain/tasks";

export class TasksController {
    tasksStorage: TasksStorage;
    constructor(tasksStorage: TasksStorage) {
        this.tasksStorage = tasksStorage;
    }


    async create(req: Request, res: Response, next: NextFunction){
        const {name, date} = req.body;
        try {
            const task = await this.tasksStorage.create(name, date)
            res.status(201).json(task)
        } catch (error) {
            next(error);
        }
    }

    async get(req: Request, res: Response, next: NextFunction){
        const {id} = req.params;
        try {
            const task = await this.tasksStorage.get(id)
            res.status(200).json(task)
        } catch (error) {
            if(error === TaskNotFoundError) {
                res.status(404).json({})
                return
            }
            next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction){
        const {id} = req.body;
        try {
            const task = await this.tasksStorage.delete(id)
            res.status(203)
        } catch (error) {
            next(error);
        }
    }
    async update(req: Request, res: Response, next: NextFunction){
        const {id, name, date} = req.body;
        try {
            const task = await this.tasksStorage.update(id, name, date)
            res.status(200).json(task)
        } catch(error) {
            if(error === TaskNotFoundError) {
                res.status(404).json({})
                return
            }
            next(error);
        }
    }
    async getList(req: Request, res: Response, next: NextFunction){
        try {
            const tasks = await this.tasksStorage.list();
            res.status(200).json(tasks);
        } catch (error) {
            next(error);
        }
    }
}


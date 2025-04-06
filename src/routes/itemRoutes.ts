import { Router } from 'express';
import {TasksController} from '@/controllers/itemController';


export function newRouter (tasksController: TasksController): Router{
    const router = Router();

    router.get('/tasks', tasksController.getList.bind(tasksController));
    router.post('/tasks', tasksController.create.bind(tasksController));
    router.get('/tasks/:id', tasksController.get.bind(tasksController));
    router.delete('/tasks/:id', tasksController.delete.bind(tasksController));
    router.put('/tasks/:id', tasksController.update.bind(tasksController));

    return router
}






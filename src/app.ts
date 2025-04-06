import express from 'express';
import {newRouter} from '@/routes/itemRoutes';
import { errorHandler } from '@/middlewares/errorHandler';
import {newDB} from "@/db/db";
import {Config, initConfig} from "@/config/config";
import {TasksStorage} from "@/storage/tasks";
import {TasksController} from "@/controllers/itemController";


export const config: Config = initConfig()

const db = newDB(config.db)

const tasksStorage: TasksStorage = new TasksStorage(db)

const tasksController = new TasksController(tasksStorage)

const router = newRouter(tasksController)

const app = express();

app.use(express.json());


app.use('', router);


app.use(errorHandler);



export default app;
import {Pool} from "pg";
import {Task, TaskNotFoundError} from "@/domain/tasks";

export class TasksStorage {
    db: Pool
    constructor(db: Pool) {
        this.db = db;
    }
    async create (name:string, date:string ):Promise<Task> {
        console.log(`Creating task ${name} in ${date}`);
        const result = await this.db.query('INSERT INTO tasks (name, date) VALUES ($1, $2) RETURNING id, name, date', [name, date]);
        return result.rows[0];
    }
    async delete (id:string) {
        const result = await this.db.query('DELETE FROM tasks WHERE id = $1', [id]);
    }
    async update (id:string, name:string, date:string): Promise<Task> {
        const result = await this.db.query('UPDATE tasks SET name = $1, date = $2 WHERE id = $3 RETURNING *', [name, date, id]);
        if (result.rows.length === 0) {
            throw TaskNotFoundError
        }

        return result.rows[0];
    }
    async get (id:string):Promise<Task> {
        const result = await this.db.query('SELECT id, name, date FROM tasks WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            throw TaskNotFoundError
        }

        return result.rows[0]
    }

    async list ():Promise<Task[]> {
        const result = await this.db.query('SELECT id, name, date FROM tasks');

        return result.rows;
    }

}

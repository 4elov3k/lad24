import { Pool } from "pg";
import {resolveSrv} from "node:dns";

export type DBParams = {
    user: string,
    host: string,
    database: string,
    password: string,
    port: number
}

require('dotenv').config();

export function newDB(params: DBParams): Pool {
    return new Pool({
        user: params.user,
        host: params.host,
        database: params.database,
        password: params.password,
        port: params.port
    });
}



export async function initDB (pool: Pool) {
    pool.query(`
    CREATE TABLE IF NOT EXISTS tasks (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        date TIMESTAMP NOT NULL
        )`
    )
}




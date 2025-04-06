import dotenv from 'dotenv';

export type Config = {
    port: number;
    nodeEnv?: string;
    db: {
        user: string,
        host: string,
        database: string,
        password: string,
        port: number
    }
}

export function initConfig(): Config {
    dotenv.config();

    let dbUser = process.env.DB_USER;
    if (!dbUser) {
        throw new Error('Missing DB User');
    }
    let dbHost = process.env.DB_HOST;
    if (!dbHost) {
        throw new Error('Missing DB Host');
    }
    let dbPort = process.env.DB_PORT;
    if (!dbPort) {
        throw new Error('Missing DB Port');
    }
    let dbName = process.env.DB_NAME;
    if (!dbName) {
        throw new Error('Missing DB Name');
    }
    let dbPassword = process.env.DB_PASSWORD;
    if (!dbPassword) {
        throw new Error('Missing DB Password');
    }

    return {
        port: Number(process.env.PORT) || 3000,
        nodeEnv: process.env.NODE_ENV || 'development',
        db:{
            user: String(dbUser),
            host: String(dbHost),
            database: String(dbName),
            password: String(dbPassword),
            port: Number(dbPort)
        }
    }
}
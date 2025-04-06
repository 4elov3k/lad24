import {initDB, newDB} from "@/db/db";
import {initConfig} from "@/config/config";

initDB(newDB(initConfig().db)).then(() => {
    console.log("Successfully migrated");
}).catch((err) => {console.log(err)});
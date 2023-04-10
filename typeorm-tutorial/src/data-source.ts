import "reflect-metadata"
import { DataSource } from "typeorm"
import { Dog } from "./entity/Dog";
import { Owner } from "./entity/Owner";
import { Role } from "./entity/Role";
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "infrend2023_typeorm",
    synchronize: true,
    logging: true,
    entities: [User, Role, Dog, Owner],
    migrations: [],
    subscribers: [],
});

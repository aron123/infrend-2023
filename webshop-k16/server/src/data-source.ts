import "reflect-metadata"
import { DataSource } from "typeorm"
import { Product } from "./entity/Product"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "infrend2023_webshop_k16",
    synchronize: true,
    logging: true,
    entities: [User, Product],
    migrations: [],
    subscribers: [],
})

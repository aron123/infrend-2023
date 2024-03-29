import "reflect-metadata"
import { DataSource } from "typeorm"
import { Category } from "./entity/Category"
import { Product } from "./entity/Product"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "infrend2023_webshop_cs10",
    synchronize: true,
    logging: true,
    entities: [User, Product, Category],
    migrations: [],
    subscribers: [],
})

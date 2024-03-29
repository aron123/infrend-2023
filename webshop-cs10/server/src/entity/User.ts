import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { UserDTO } from "../../../models"
import { Product } from "./Product"

@Entity()
export class User implements UserDTO {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @OneToMany(() => Product, (product) => product.seller)
    products: Product[];
}

import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Unique } from "typeorm"
import { UserDTO } from "../../../models"
import { Product } from "./Product";

@Entity()
export class User implements UserDTO {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ unique: true })
    email: string;

    @Column({ select: false })
    password: string;

    @OneToMany(() => Product, product => product.uploader)
    products: Product[];
}

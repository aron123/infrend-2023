import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { CategoryDTO } from "../../../models";
import { Product } from "./Product";

@Entity()
export class Category implements CategoryDTO {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToMany(() => Product, product => product.categories)
    products: Product[];
}

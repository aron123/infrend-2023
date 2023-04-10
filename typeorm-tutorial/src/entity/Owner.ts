// Owner.ts
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Dog } from "./Dog";

@Entity()
export class Owner {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Dog, (dog) => dog.owner, {
        cascade: true,
    })
    dogs: Dog[];
}
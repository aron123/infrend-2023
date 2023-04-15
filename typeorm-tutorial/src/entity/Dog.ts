// Dog.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Owner } from "./Owner";

@Entity()
export class Dog {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => Owner, owner => owner.dogs, { onDelete: 'CASCADE' })
    owner: Owner;
}
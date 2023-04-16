import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { UserDTO } from "webshop-models"

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

}

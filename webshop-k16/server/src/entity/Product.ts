import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ProductDTO } from '../../../models';

@Entity()
export class Product implements ProductDTO {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    imgUrl: string;

    @Column()
    brand: string;
}
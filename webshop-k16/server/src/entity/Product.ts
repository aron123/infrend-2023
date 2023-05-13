import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductDTO } from '../../../models';
import { Category } from './Category';
import { User } from './User';

@Entity()
export class Product implements ProductDTO {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, type: 'text' })
    title: string;

    @Column({ nullable: true, type: 'text' })
    description: string;

    @Column()
    price: number;

    @Column()
    imgUrl: string;

    @Column({ nullable: true })
    brand: string;

    @ManyToOne(() => User, (user) => user.products, { eager: true })
    uploader: User;

    @ManyToMany(() => Category, category => category.products, { eager: true })
    @JoinTable()
    categories: Category[];
}
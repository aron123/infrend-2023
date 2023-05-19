import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryDTO, ProductDTO } from '../../../models';
import { Category } from './Category';
import { User } from './User';

@Entity()
export class Product implements ProductDTO {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    title: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'float' })
    price: number;

    @Column()
    imgUrl: string;
    
    @Column({ nullable: true })
    brand: string;

    @ManyToMany(() => Category, { eager: true })
    @JoinTable()
    categories: CategoryDTO[];

    @ManyToOne(() => User, (user) => user.products, { eager: true })
    seller: User;
}
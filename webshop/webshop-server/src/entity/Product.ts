import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductDTO } from 'webshop-models';
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

    @ManyToOne(() => User, (user) => user.products, { eager: true })
    user: User;

    @ManyToMany(() => Category, { eager: true })
    @JoinTable()
    categories: Category[];

}
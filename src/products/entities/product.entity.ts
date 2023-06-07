import { Category } from "src/categories/entities/category.entity";
import { Type } from "src/type/entities/type.entity";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: "float" })
  price: number;

  @JoinTable()
  @ManyToMany(() => Category, (category) => category.products, { eager: true })
  categories: Category[];

  @JoinTable()
  @ManyToMany(() => Type, (type) => type.products, { eager: true })
  types: Type[];
}

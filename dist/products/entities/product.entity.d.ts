import { Category } from "src/categories/entities/category.entity";
import { Type } from "src/type/entities/type.entity";
export declare class Product {
    id: string;
    name: string;
    description: string;
    price: number;
    categories: Category[];
    types: Type[];
}
